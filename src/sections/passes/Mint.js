import { useEffect } from "react";
import { ethers } from 'ethers';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
// components
import Card from './Card';
import CheckoutSummary from './CheckoutSummary';
import { useSelector, useDispatch } from '../../redux/store';
import Button from '../../components/Button'
import {
    connect
} from '../../redux/slices/connection';
import { setRealmPass } from '../../redux/slices/passes'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
    padding: '100px',
}));

// ----------------------------------------------------------------------

export default function Mint() {
    const { realmPasses, mintAmount } = useSelector((state) => state.passes);
    const { loading, account, smartContract, web3, errorMsg, network } = useSelector((state) => state.connection);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const web3Connect = async () => {
        if (!account) {
            await dispatch(connect());
        }
    }
    useEffect(() =>{
        console.log(realmPasses)
    }, [realmPasses]);
    useEffect(() => {
        if (loading === false) enqueueSnackbar("Successfully Connected", { variant: 'success' });

    }, [loading])

    useEffect(() => {
        if (network && network !== '0x4') {
            enqueueSnackbar("Please connect to mainnet", { variant: 'error' });
        }
        if (errorMsg) {
            enqueueSnackbar(errorMsg, { variant: 'success' });
        }

        if(smartContract && realmPasses){
            smartContract.on('Mint', async () => {
                const newPasses=[];
                for (let i = 0 ; i < realmPasses.length ; i+=1) {
                    // eslint-disable-next-line no-await-in-loop
                    const quantity = await smartContract.getRealmCounter(realmPasses[i].id);
                    const obj = {
                        id : realmPasses[i].id,
                        quantity: parseInt(quantity, 10)
                    }
                    newPasses.push(obj);
                    // console.log("New Pass: ",newPasses.quantity)
                }
                console.log("New Pass: ",newPasses)
                dispatch(setRealmPass({ value : newPasses}));
            });
        }
    }, [account, network])

    const handleMint = async () => {

        if(account) {
            try {
                //  ind = await smartContract.setMintStep(2);
                const mintStep = await smartContract.getMintStep();
                const step = parseInt(mintStep, 10);
                if (step === 1) {

                    const users = await axios.get(`http://localhost:8000/v1/signature/${account}`);
                    if (users.data.verified === true) {
                        await smartContract.preMintPass(users.data.proof, mintAmount, { value: ethers.utils.parseEther("0.01") });
                        enqueueSnackbar("Successfully Minted!", { variant: 'success' });
                    }
                    else {
                        enqueueSnackbar("You are not a whitelist member", { variant: 'error' });
                    }
                }
                else if (step === 2) {
                    await smartContract.mintPass(mintAmount, { value: ethers.utils.parseEther("0.01") });
                    enqueueSnackbar("Successfully Minted!", { variant: 'success' });
                }
            } catch (err) {
                if (err.error?.message) {
                    enqueueSnackbar(`Mint Failed: ${err.error.message} `, { variant: 'error' });
                }
                else enqueueSnackbar(`Mint Failed: Transaction Reverted `, { variant: 'error' });
                console.log(err);
            }
        }
        else {
            web3Connect();
        }
    }

    return (
        <>
            <RootStyle>
                <Grid container spacing={3} sx={{ justifyContent: 'space-around' }}>
                    <Grid item xs={12} md={9}>
                        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                            {realmPasses.map((item, idx) =>
                                <Grid item key={idx}>
                                    <Card {...item} />
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CheckoutSummary
                            onChange={(e, value) => {
                                console.log(value);
                            }}
                            total={90}
                            enableDiscount
                            discount={0}
                            subtotal={20}
                            onApplyDiscount={() => { }}

                        />
                        <Button fullWidth size="large" type="submit" variant="contained" handleClick={() => {
                            handleMint()
                        }}>
                            {account ? `Mint  (${account.substring(0, 5)}....${account.substring(account.length - 5, account.length)})` : 'Connect Wallet'}
                        </Button>
                    </Grid>
                </Grid>
            </RootStyle>
        </>
    );
}
