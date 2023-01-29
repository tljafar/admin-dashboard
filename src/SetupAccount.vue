<template>
    <div class="container setup-account-content mb-5">
        <div class="card card-md mb-5">
            <div class="card-body">
                <ul class="step-list">
                    <li v-for="(item, index) in stepListItems" :key="index" :class="{ 'active': selected === 'step-' + index }">
                        <div class="step-list-action" @click="selected = 'step-' + index">{{ item }}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="step-list-content">
            <StepListContentItem id="step-0" :selected="selected">
                <div class="card card-lg">
                    <div class="card-body">
                        <div class="card-heading">Welcome</div>
                        <div class="card-subheading">Congratulations, you have successfully created an account for your store, <strong>Jollea</strong></div>
                        <hr class="my-4">
                        <div class="card-heading">What is Syncost?</div>
                        <div class="card-subheading">Syncost is an analytic management software that is designed to help online merchants to monitor profit and cost in real-time with one easy-to-use dashboard.</div>
                    </div>
                </div>
                <div class="text-right">
                    <button class="btn btn-primary mt-3">Let's Go</button>
                </div>
            </StepListContentItem>
            <StepListContentItem id="step-1" :selected="selected">
                <form @submit.prevent="">
                    <div class="card card-w-min w-fit-content mx-auto">
                        <div class="card-body">
                            <div class="card-subheading mb-3">Create Password</div>
                            <div class="mb-3">
                                <label class="form-label form-control mb-0 text-black">Email</label>
                                <label class="form-control d-flex align-items-center">
                                    user-email@gamil.com
                                    <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15" viewBox="0 0 15 15">
                                        <image id="padlock" width="15" height="15"
                                            xlink:href="data:image/png;base64,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" />
                                    </svg>
                                </label>


                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" placeholder="Password">
                            </div>
                            <div class="mb-4">
                                <input type="password" class="form-control" placeholder="Confirm Password">
                            </div>
                            <button class="btn btn-primary w-100">Save and Continue</button>
                        </div>
                    </div>
                </form>
            </StepListContentItem>
            <StepListContentItem id="step-2" :selected="selected">
                <form @submit.prevent="">
                    <div class="card card-w-min w-fit-content mx-auto">
                        <div class="card-header">
                            <div class="card-subheading text-sm text-light-grey">Transaction fees</div>
                        </div>
                        <div class="card-body">
                            <p class="text-light-grey">How we calculate the transaction fees that Shopify and multiple payment gateways charge for each order sold.</p>
                            <div v-for="(transactionFee, index) in transactionFees" :key="index" class="mb-3">
                                <label class="form-label">{{ transactionFee.title }} <span class="small text-light-grey">{{ transactionFee.subtitle }}</span></label>
                                <div class="d-lg-flex align-items-center">
                                    <div class="input-group input-group-sm w-lg-25">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">$</span>
                                        </div>
                                        <input type="text" class="form-control bg-white text-center" :value="transactionFee.amount">
                                    </div>
                                    <div class="px-2 font-weight-bold">+</div>
                                    <div class="input-group input-group-sm w-lg-25">
                                        <input type="text" class="form-control bg-white text-center" :value="transactionFee.percentage">
                                        <div class="input-group-append">
                                            <span class="input-group-text">%</span>
                                        </div>
                                    </div>
                                    <div class="px-2 font-weight-bold">+</div>
                                    <div class="input-group input-group-sm w-lg-50">
                                        <input type="text" class="form-control bg-white text-center" :value="transactionFee.gateway_fee">
                                        <div class="input-group-append">
                                            <span class="input-group-text">% Shopify external gateway fee</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-right">
                                <button class="btn btn-primary mt-3">Save and Continue</button>
                            </div>

                        </div>
                    </div>
                </form>
            </StepListContentItem>
        </div>
    </div>
</template>
<script>
import StepListContentItem from './components/StepListContentItem.vue';

export default {
    name: "SetupAccount",
    components: { StepListContentItem },
    data() {
        return {
            selected: 'step-0',
            stepListItems: [
                'Welcome',
                'Create password',
                'Setup costs',
                'Import data',
                'Finish',
            ],
            transactionFees: [
                { title: 'PayPal', subtitle: '', amount: 0.30, percentage: 2.9, gateway_fee: 2 },
                { title: 'Payment Gateway', subtitle: 'Stripe, 2checkout, etc..', amount: 0.30, percentage: 2.9, gateway_fee: 2 },
                { title: 'Shopify Payments', subtitle: '', amount: 0.20, percentage: 2.9, gateway_fee: 0 },
                { title: 'Others', subtitle: '', amount: 0.20, percentage: 2.9, gateway_fee: 2 },
            ]
        }
    }
}
</script>
