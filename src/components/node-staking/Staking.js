import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import AccountFormContainer from '../accounts/AccountFormContainer'
import AccountFormSection from '../accounts/AccountFormSection'
import StakingForm from './StakingForm'

class Staking extends Component {
   state = {
      loader: false,
      amountStaking: ''
   }

   handleChange = (e, { name, value }) => {
      this.setState(() => ({
         [name]: value
      }))
   }

   handleSubmit = e => {
      e.preventDefault()

      if (!this.isLegitForm()) {
         return false
      }

      this.setState(() => ({
         loader: true
      }))

      setTimeout(() => {
         this.setState(() => ({
            loader: false
         }))
      }, 1500);

   }

   isLegitForm = () => {
      return this.state.amountStaking
   }

   render() {
      const { loader } = this.state

      return (
         <AccountFormContainer 
            title='Staking'
            text='Setup your Node via CLI, then add it here.'
            disclaimer={false}
         >
            <AccountFormSection 
               handleSubmit={this.handleSubmit}
            >
               <StakingForm
                  loader={loader}
                  handleChange={this.handleChange}
                  isLegitForm={this.isLegitForm}
               />
            </AccountFormSection>
         </AccountFormContainer>
      )
   }
}

export const StakingWithRouter = withRouter(Staking)
