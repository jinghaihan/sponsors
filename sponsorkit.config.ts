import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  mode: 'sponsors',
  providers: ['github'],
  tiers: [
    {
      title: 'Backer',
      preset: tierPresets.small,
    },
    {
      title: 'Sponsor',
      monthlyDollars: 10,
      preset: tierPresets.base,
    },
    {
      title: 'Silver Supporter',
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },
    {
      title: 'Gold Supporter',
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
  ],
})
