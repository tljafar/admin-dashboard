function addTooltip(title, content) {
  return toWrapper({
    title,
    content,
  });
}
function toWrapper(tooltip) {
  return `<div>
    <div class="tooltip-title">${tooltip.title}</div>
    <div class="tooltip-content">${tooltip.content}</div>
</div>`;
}

// span tag for highlight a blue color
export default {
  revenue: addTooltip("Revenue", /*html*/ `<p><span>Includes: </span>Sales, Shipping charges, Taxes</p><p><span>Deducts: </span>Refund and Discounts</p>`),
  transaction_fees: addTooltip("Transactions fees", /*html*/ `<p><span>It is a flat amount + Percentage rate deducted per order that paid by PayPal, Shopify Payments, 3rd payment gateway or other Payment methods</span></p>`),
  sales: addTooltip("Sales", /*html*/ `<p><span>The Total of Product Price * Quantity</span></p>`),
  repeated_customers: addTooltip("Repeated Customers", /*html*/ `<p><span>The percentage (%) of the customers has been purchased multiples times from your store</span></p>`),
  refunds: addTooltip("Refunds", /*html*/ `<p><span>The total Refunds.</span></p><p>Refunds are counted by <span>Transaction Date</span>. You can change that to be counted by <span>order</span> date from Performance in settings</p>`),
  ad_spend_per_order: addTooltip("Ad Spend Per Order", /*html*/ `<p><span>Marketing costs / Total orders</span></p>`),
  shipping_charge: addTooltip("Shipping charge", /*html*/ `<p><span>Shipping charge per order * Total orders</span></p>`),
  avg_order_profit: addTooltip("Avg. Order Profit", /*html*/ `<p><span>Net Profit / Total orders</span></p>`),
  tiktok_ads: addTooltip("TikTok Ads", /*html*/ `<p><span>The total Campaigns Spend.</span></p><p>You can deduct specific campaign spending from the total through the TikTok Ads page.</p>`),
  google_ads: addTooltip("Google Ads", /*html*/ `<p><span>The total Campaigns Spend.</span></p><p>You can deduct specific campaign spending from the total through the Google Ads page.</p>`),
  facebook_ads: addTooltip("Facebook Ads", /*html*/ `<p><span>The total Campaigns Spend.</span></p><p>You can deduct specific campaign spending from the total through the Facebook Ads page.</p>`),
  avg_order_value: addTooltip("Avg. Order value", /*html*/ `<p><span>Revenue / Total orders</span></p>`),
  net_profit: addTooltip("Net Profit", /*html*/ `<p><span>Includes: </span>Revenue & Tips</p><p><span>Deducts: </span>COGS, POD Costs, Marketing Costs , taxes Refunds, Discounts, Custom cost, Transactions fees, Shipping & Handing fees.</p>`),
  marketing_costs: addTooltip("Marketing costs", /*html*/ `<p><span>Includes: </span>Facebook ads, Google Ads, and TikTok ads</p>`),
  printify_total_costs: addTooltip("Printify Total Costs", /*html*/ `<p><span>Including: </span>Production cost, Shipping Cost, Taxes.</p><p>Printify counted shipping surcharge into shipping cost and counted digital fee into production cost.</p><p>Production cost = Product cost</p>`),
  cogs_pod_total_costs: addTooltip("COGS & POD Total Costs", /*html*/ `<p><span>Includes: </span>COGS, Printify Costs, and Printful Costs</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex justify-content-between"><span>COGS</span><span>$19,794.97</span></li>
      <li class="list-group-item d-flex justify-content-between"><span>Printify Total Costs</span><span>$8,432.76</span></li>
      <li class="list-group-item d-flex justify-content-between"><span>Printful Total Costs</span><span>$729,673,83</span></li>
    </ul>`),
  printiful_total_costs: addTooltip("Printiful Total Costs", /*html*/ `<p><span>Including: </span>Production cost, Shipping Cost, Taxes, Digitization and Shipping surcharge</p><p>Printify <span class="muted">counted shipping surcharge into shipping cost and counted digital fee into production cost.</span></p><p class="muted">Production cost = Product cost</p>`),
};
