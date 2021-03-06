import React from 'react'

import MobileContainer from './MobileContainer'
import SignAnimatedArrow from './SignAnimatedArrow'

import { Grid } from 'semantic-ui-react'

const SignTransferReady = ({ status, isMonetaryTransaction }) => (
    <MobileContainer>
        <Grid padded>
            <Grid.Row centered>
                <Grid.Column
                    textAlign='center'
                    className='authorize'
                >
                    <SignAnimatedArrow
                        start={true}
                        pending={status === 'in-progress'}
                        end={status === 'success'}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className='title'>
                <Grid.Column
                    as='h2'
                    textAlign='center'
                >
                    <span className='font-bold transferring-dots'>{isMonetaryTransaction ? 'Transferring' : 'Authorizing'}</span>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid padded>
            <Grid.Row centered className='contract'>
                <Grid.Column
                    largeScreen={12}
                    computer={14}
                    tablet={16}
                    textAlign='center'
                >
                    {/* Contract: @contractname.near */}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </MobileContainer>
)

export default SignTransferReady
