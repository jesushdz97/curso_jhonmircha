import logos from '@/assets/logos'

const { BNB, BTC, ETH, SOL } = logos

const products = [
  { id: 'BTC', name: 'Bitcon', price: 19200, logo: BTC, alt: 'logo_btc.png' },
  { id: 'ETH', name: 'Ether', price: 1300, logo: ETH, alt: 'logo_eth.png' },
  { id: 'SOL', name: 'Solana', price: 32, logo: SOL, alt: 'logo_sol.png' },
  { id: 'BNB', name: 'Binance', price: 273, logo: BNB, alt: 'logo_bnb.png' },
]

export default products
