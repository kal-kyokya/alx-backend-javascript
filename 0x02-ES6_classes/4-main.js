import Currency from './3-currency';
import Pricing from './4-pricing';

const currency = new Currency('D€M', 'DemMoney');
const pricing = new Pricing(100, currency);
console.log(pricing);
console.log(Pricing.convertPrice(100, 1.23));
console.log(pricing.displayFullPrice());
