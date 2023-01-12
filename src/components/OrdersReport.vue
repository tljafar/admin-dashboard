<template>
    <div class="row">
        <div class="col-lg-9">
            <div class="row">
                <div v-for="(item, index) in items" :key="index" class="col-lg-4 col-sm-6 mb-4">
                    <CardItem :index="index" :item="item" />
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="row">
                <div v-for="(item, index) in customItems" :key="index" class="col-lg-12 col-sm-6 mb-4">
                    <CardItem :index="index" :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { randomScalingFactor, randomPercentageFactor } from '../helper'
import tooltips from '../helper/floating/tooltips';
import CardItem from './CardItem.vue';
const maximum = 100000;
export default {
    name: "OrdersReport",
    components: { CardItem },
    data() {
        return {
            items: [
                { label: 'Orders', amount: randomScalingFactor(maximum).value, percentage: randomPercentageFactor(), symbol: '', is_toggle_btn: false, enabled: false },
                { label: 'Sales', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip: tooltips.sales },
                { label: 'Transactions fees', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip: tooltips.transaction_fees },
                { label: 'Tax Charged', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: true, enabled: true },
                { label: 'Shipping Charged', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip: tooltips.shipping_charge },
                { label: 'Shipping Costs', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip: tooltips.shipping_costs },
                { label: 'Discounts', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
                { label: 'Refunds', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip: tooltips.refunds },
                { label: 'Handing fees', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
            ],
            customItems: [
                {
                    label: 'Custom costs', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: true, enabled: false,
                    tooltip: tooltips.order,
                    child_items: [
                        { label: 'Software Subscriptions', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Payroll', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Rent', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Internet Services', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Company Car', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Supplies, ecx product cost', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Offline Advertising', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Legal fees', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Phone bills', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Equipment', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'bank fees and Interest', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Utilities', amount: randomScalingFactor(maximum).formatedValue },
                        { label: 'Other', amount: randomScalingFactor(maximum).formatedValue },
                    ]
                },
                { label: 'Tips', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
            ]
        };
    }
}
</script>


