import React, { Component } from 'react'
import Newsitem from './Newsitem'


export class Newpa extends Component {
  articles =[
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Jessica Klein",
        "title": "Bitcoin Bros Go Wild for Donald Trump",
        "description": "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
        "url": "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
        "urlToImage": "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
        "publishedAt": "2024-07-28T12:43:07Z",
        "content": "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Steven Levy",
        "title": "Trump's Crypto Embrace Could Be a Disaster for Bitcoin",
        "description": "At the Bitcoin 2024 conference in Nashville, Donald Trump promised the crypto community the moon. They'd better hope they don't get it.",
        "url": "https://www.wired.com/story/donald-trump-bitcoin-reserve-promises/",
        "urlToImage": "https://media.wired.com/photos/66ab594d0c0cc4819f595db4/191:100/w_1280,c_limit/073024_Crypto%20get%20rich%20quick.jpg",
        "publishedAt": "2024-08-02T13:00:00Z",
        "content": "Donald Trump is an unlikely crypto ally. The power of bitcoin, embodied in Satoshi Nakamotos founding document, is that it frees participants from murky assessments of trust, instead relying on the b… [+4248 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Harri Weber",
        "title": "Trump Promises to Make U.S. the ‘Crypto Capital of the Planet and the Bitcoin Superpower’",
        "description": "The former president drew cheers at the 2024 Bitcoin Conference after saying he'll \"fire\" Biden-nominated SEC Chair Gary Gensler.",
        "url": "https://gizmodo.com/trump-promises-to-make-u-s-the-crypto-capital-of-the-planet-and-the-bitcoin-superpower-2000480037",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-27-at-1.02.37 PM.jpg",
        "publishedAt": "2024-07-27T20:59:48Z",
        "content": "Speaking to a crowd of supporters at the Bitcoin 2024 Conference in Nashville, Tennessee, former president and Republican nominee Donald Trump said he would make the U.S. the “crypto capital of the p… [+2326 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "Slashdot Staff",
        "title": "RFK Jr. Says He'd Direct the Government to Buy $615 Billion in Bitcoin or 4 Million Bitcoins",
        "description": "US presidential candidate, Robert F. Kennedy Jr., announced during his keynote Friday at the Bitcoin Conference that he would direct the US government to buy Bitcoin until the size of its Bitcoin reserves matched its gold reserves. At current prices, that equ…",
        "url": "https://news.slashdot.org/story/24/07/26/239214/rfk-jr-says-hed-direct-the-government-to-buy-615-billion-in-bitcoin-or-4-million-bitcoins",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2024-07-26T23:03:00Z",
        "content": "... a position of dominance that no other country will be able to usurp.\r\nWhy and who cares? Trading money for a different kind of money give us \"dominance\"? What part of your brain did that worm eat… [+237 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "Crypto Bro Charters Private SpaceX Mission to Earth’s Poles",
        "description": "Fram2 could fly as early as this year, marking SpaceX's seventh private crew of astronauts.",
        "url": "https://gizmodo.com/crypto-bro-charters-private-spacex-mission-to-earths-poles-2000486329",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/SpaceX-Private-Mission.jpeg",
        "publishedAt": "2024-08-13T16:05:37Z",
        "content": "A private crew of astronauts that includes a cinematographer and an explorer, and commanded by a wealthy bitcoin entrepreneur, will be the first human spaceflight to go over Earth’s polar region.\r\nSp… [+2136 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Crypto asset firm Grayscale has lost $20 billion in Bitcoin and Ethereum ETFs",
        "description": "Leading crypto-specific asset manager Grayscale Investments has lost over $20.4 billion through outflows from its Bitcoin (BTC) and Ethereum (ETH)… Continue reading Crypto asset firm Grayscale has lost $20 billion in Bitcoin and Ethereum ETFs\nThe post Crypto …",
        "url": "https://readwrite.com/grayscale-bitcoin-ethereum-etf-losses-20-billion/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/6f232dbd-27a0-45f2-87c6-639075c6ef40.webp",
        "publishedAt": "2024-07-30T20:41:13Z",
        "content": "Leading crypto-specific asset manager Grayscale Investments has lost over $20.4 billion through outflows from its Bitcoin (BTC) and Ethereum (ETH) exchange-traded funds (ETFs).\r\nAccording to data gat… [+2456 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "US strategic Bitcoin reserve to be financed by revaluing Fed’s gold",
        "description": "United States’ strategic Bitcoin (BTC) reserve would be partly financed by revaluing gold certificates held by the Federal Reserve System,… Continue reading US strategic Bitcoin reserve to be financed by revaluing Fed’s gold\nThe post US strategic Bitcoin rese…",
        "url": "https://readwrite.com/us-strategic-bitcoin-reserve-to-be-financed-by-fed-gold/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/b39a34b3-1c6a-47b1-ade2-fb55f8ae2510.webp",
        "publishedAt": "2024-07-31T14:22:25Z",
        "content": "United States’ strategic Bitcoin (BTC) reserve would be partly financed by revaluing gold certificates held by the Federal Reserve System, draft legislation shows.\r\nAccording to a July 30 Coindesk re… [+2038 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Jersey City Pension Fund to Invest in Bitcoin ETFs",
        "description": "Jersey City Mayor Steven Fulop announced on Thursday that the city’s municipal pension plan will soon invest in Bitcoin (BTC)… Continue reading Jersey City Pension Fund to Invest in Bitcoin ETFs\nThe post Jersey City Pension Fund to Invest in Bitcoin ETFs appe…",
        "url": "https://readwrite.com/jersey-city-pension-fund-to-invest-in-bitcoin-etfs/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/bd71c2e9-e4c9-4897-bc5e-1ccff22dc577.webp",
        "publishedAt": "2024-07-26T15:14:38Z",
        "content": "Jersey City Mayor Steven Fulop announced on Thursday that the city’s municipal pension plan will soon invest in Bitcoin (BTC) through exchange-traded funds (ETFs).\r\nNot my normal subject matter in a … [+2136 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin surges past $68,000 amid continued ETF inflows",
        "description": "Bitcoin (BTC) breached the $68,000 resistance level during Sunday night trading in Eastern Standard Time, continuing its upward trajectory. According… Continue reading Bitcoin surges past $68,000 amid continued ETF inflows\nThe post Bitcoin surges past $68,000…",
        "url": "https://readwrite.com/bitcoin-surges-past-68000-amid-continued-etf-inflows/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/e009442e-4fcb-42c5-a9a5-d29a19a4fce0.webp",
        "publishedAt": "2024-07-22T14:07:42Z",
        "content": "Bitcoin (BTC) breached the $68,000 resistance level during Sunday night trading in Eastern Standard Time, continuing its upward trajectory.\r\nAccording to CoinMarketCap data, the leading cryptocurrenc… [+2189 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Mt. Gox Moves Another $2.5B of Bitcoin",
        "description": "Mt. Gox, the defunct cryptocurrency exchange, has transferred 37,477 Bitcoin (BTC), valued at approximately $2.5 billion, to an unidentified wallet… Continue reading Mt. Gox Moves Another $2.5B of Bitcoin\nThe post Mt. Gox Moves Another $2.5B of Bitcoin appear…",
        "url": "https://readwrite.com/mt-gox-bitcoin-wallet-billion/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/2e61124b-41ff-4d14-8c83-214fbd93c644.webp",
        "publishedAt": "2024-07-25T03:21:08Z",
        "content": "Chat history ChatGPT ChatGPT Explore GPTs Today Mt. Gox Bitcoin Transfer CrowdStrike Apology Backlash SEC Approves Ethereum ETFs Previous 7 Days Xbox 360 Marketplace Discounts College Football 25 Rev… [+6118 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Donald Trump raises $25M during Bitcoin 2024 conference",
        "description": "Republican presidential candidate Donald Trump raised $25 million during the The Bitcoin 2024 conference. Fox Business reporter Eleanor Terrett announced that… Continue reading Donald Trump raises $25M during Bitcoin 2024 conference\nThe post Donald Trump rais…",
        "url": "https://readwrite.com/donald-trump-raises-25m-during-bitcoin-2024-conference/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/21a7fe68-8fbd-44c2-8955-162a8d23f326.webp",
        "publishedAt": "2024-07-31T11:57:00Z",
        "content": "Republican presidential candidate Donald Trump raised $25 million during the The Bitcoin 2024 conference.\r\nFox Business reporter Eleanor Terrett announced that Trump raised an undisclosed amount of f… [+1883 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Trump fights for the crypto vote at Bitcoin conference",
        "description": "At the Bitcoin 2024 conference in Nashville, Tennessee, former President Donald Trump delivered a keynote speech. Trump, the Republican presidential… Continue reading Trump fights for the crypto vote at Bitcoin conference\nThe post Trump fights for the crypto …",
        "url": "https://readwrite.com/trump-crypto-bitcoin-conference/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/8483c1b4-7ea2-47a9-a0b2-b50d58578a99.webp",
        "publishedAt": "2024-07-29T16:21:50Z",
        "content": "At the Bitcoin 2024 conference in Nashville, Tennessee, former President Donald Trump delivered a keynote speech.\r\nTrump, the Republican presidential candidate, used the platform to appeal to the tec… [+3450 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin and wider crypto market tumbles as global stocks falter",
        "description": "Bitcoin (BTC) experienced a sharp 3% decline at the onset of Asian trading, mirroring a broader downturn in stock markets… Continue reading Bitcoin and wider crypto market tumbles as global stocks falter\nThe post Bitcoin and wider crypto market tumbles as glo…",
        "url": "https://readwrite.com/cryptocurrency-bitcoin-market-tumbles-as-global-stocks-falter/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/7ef838ca-e7d5-4e5f-84b3-257b30922fcd.webp",
        "publishedAt": "2024-07-25T16:24:02Z",
        "content": "Bitcoin (BTC) experienced a sharp 3% decline at the onset of Asian trading, mirroring a broader downturn in stock markets and diminishing appetite for high-risk assets.\r\nThis follows Bitcoin surging … [+1904 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Lucas Ropek",
        "title": "This Could Be the Beginning of the End of Trump’s Love for Crypto Cash",
        "description": "The Donald chose the wrong time to get into web3.",
        "url": "https://gizmodo.com/this-could-be-the-beginning-of-the-end-of-trumps-love-for-crypto-cash-2000483266",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Trump_makes_a_-weird_face_at_a_campaign_rally-.jpg",
        "publishedAt": "2024-08-05T21:35:52Z",
        "content": "Donald Trump’s honeymoon with the cryptocurrency industry may be over. At the very least, the campaign contributions in Dogecoin he received last month are probably a lot less valuable right now than… [+3766 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "EditorDavid",
        "title": "Edward Snowden Skeptical of Politicians at Bitcoin Conference - and Public Ledgers",
        "description": "Former U.S. president Donald Trump spoke at Nashville's Bitcoin Conference on Saturday. \n\nBut he wasn't the only one there making headlines, according to a local newspaper called the Tennesseean:\n\nRepublican Sens. Cynthia Lummis and Tim Scott pledged their re…",
        "url": "https://politics.slashdot.org/story/24/07/28/0447203/edward-snowden-skeptical-of-politicians-at-bitcoin-conference---and-public-ledgers",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2024-07-28T11:34:00Z",
        "content": "Former U.S. president Donald Trump spoke at Nashville's Bitcoin Conference on Saturday.But he wasn't the only one there making headlines, according to a local newspaper called the Tennesseean:\r\nRepub… [+3475 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin approaches $70,000 in six-week high amid Trump support",
        "description": "CoinMarketCap data shows that Bitcoin’s (BTC) price approached $70,000 on Monday, reaching a six-week high following former U.S. President Donald… Continue reading Bitcoin approaches $70,000 in six-week high amid Trump support\nThe post Bitcoin approaches $70,…",
        "url": "https://readwrite.com/bitcoin-price-trump-cryptocurrency/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/32f89dce-300f-4e5c-af49-baf9c1219b2b.webp",
        "publishedAt": "2024-07-29T18:18:27Z",
        "content": "CoinMarketCap data shows that Bitcoin’s (BTC) price approached $70,000 on Monday, reaching a six-week high following former U.S. President Donald Trump’s renewed support for cryptocurrency over the w… [+2131 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Kamala Harris considers Bitcoin conference: blue crypto shift?",
        "description": "Recent developments suggest a possible realignment in political attitudes towards cryptocurrencies, with both Vice President Kamala Harris and former President… Continue reading Kamala Harris considers Bitcoin conference: blue crypto shift?\nThe post Kamala Ha…",
        "url": "https://readwrite.com/kamala-harris-considers-bitcoin-conference-blue-crypto-shift/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/586be38c-f84f-4b21-b208-a72bef4e52aa.webp",
        "publishedAt": "2024-07-25T03:27:10Z",
        "content": "Recent developments suggest a possible realignment in political attitudes towards cryptocurrencies, with both Vice President Kamala Harris and former President Donald Trump at the center of speculati… [+2765 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Hope C",
        "title": "BlackRock's IBIT Bitcoin ETF Sees Highest Inflows Since March",
        "description": "BlackRock’s spot Bitcoin exchange-traded fund (ETF) has experienced its largest inflow in over four months.",
        "url": "https://finance.yahoo.com/news/blackrocks-ibit-bitcoin-etf-sees-081039300.html",
        "urlToImage": "https://media.zenfs.com/en/coinmarketcap_783/861990b4d3f801375723f75ec322858e",
        "publishedAt": "2024-07-23T08:10:39Z",
        "content": "BlackRock's IBIT Bitcoin ETF Sees Highest Inflows Since March\r\nBlackRocks spot Bitcoin exchange-traded fund (ETF) has experienced its largest inflow in over four months. The iShares Bitcoin Trust (IB… [+1249 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Crypto sees volatility after Joe Biden’s withdrawal",
        "description": "The cryptocurrency market witnessed significant turbulence shortly after U.S. President Joe Biden announced his withdrawal from the 2024 presidential election.… Continue reading Crypto sees volatility after Joe Biden’s withdrawal\nThe post Crypto sees volatili…",
        "url": "https://readwrite.com/crypto-sees-volatility-after-joe-bidens-withdrawal/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/208028c4-3f4a-4bfa-b096-e4413eba0bd5.webp",
        "publishedAt": "2024-07-22T16:22:34Z",
        "content": "The cryptocurrency market witnessed significant turbulence shortly after U.S. President Joe Biden announced his withdrawal from the 2024 presidential election.\r\nWithin a 30-minute window, nearly $67 … [+1921 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Lucas Ropek",
        "title": "Kamala Harris Wants to Get Closer to Crypto Bros, If They’ll Let Her",
        "description": "Cryptocurrency has become the latest flashpoint in the presidential candidates' war for the soul of Silicon Valley.",
        "url": "https://gizmodo.com/kamala-harris-wants-to-get-closer-to-crypto-bros-if-theyll-let-her-2000480701",
        "urlToImage": "https://gizmodo.com/app/uploads/2019/05/oqakhahoqrr6i0b6qu50.jpg",
        "publishedAt": "2024-07-30T13:30:20Z",
        "content": "Over the past week, Kamala Harris has made it known that she plans on hitting the “reset” button when it comes to the cryptocurrency industry. Currently, there’s bad blood between crypto stans and th… [+6026 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Matt Novak",
        "title": "North Korean Man Indicted for Ransomware Attacks on U.S. Health Care Companies",
        "description": "Rim Jong Hyok allegedly targeted NASA and defense contractors as well.",
        "url": "https://gizmodo.com/north-korean-man-indicted-for-ransomware-attacks-on-u-s-health-care-companies-2000479109",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-25-at-11.39.25 AM.jpg",
        "publishedAt": "2024-07-25T19:15:49Z",
        "content": "A man allegedly working for North Korean intelligence was indicted by U.S. prosecutors on Thursday for conspiracy to hack computers at NASA and military bases, along with serious ransomware attacks a… [+2142 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "Top Altcoins to Invest in Ahead of Bitcoin’s Next Bull Run – $BTC, $SOL, $ETH, $BNB, $XRP, and $99BTC",
        "description": "With Bitcoin (BTC) surging and the market exhibiting greed according to the Fear and Greed Index, it’s an opportune time… Continue reading Top Altcoins to Invest in Ahead of Bitcoin’s Next Bull Run – $BTC, $SOL, $ETH, $BNB, $XRP, and $99BTC\nThe post Top Altco…",
        "url": "https://readwrite.com/top-altcoins-to-invest-in-ahead-of-bitcoins-next-bull-run-btc-sol-eth-bnb-xrp-and-99btc/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/top-altcoins-to-invest-in-ahead-of-bitcoin-next-bull-run.jpg",
        "publishedAt": "2024-07-31T19:36:05Z",
        "content": "With Bitcoin (BTC) surging and the market exhibiting greed according to the Fear and Greed Index, it’s an opportune time to consider diversifying your portfolio with altcoin investments.\r\nWhile meme … [+6891 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "EditorDavid",
        "title": "Trump Says He'd Oppose CBDCs, Pardon Ulbricht, and Create a 'Strategic National Bitcoin Stockpile'",
        "description": "Speaking at the Bitcoin Conference in Nashville, Republican presidential nominee Donald Trump made a number of cryptocurrency-related pledges. \n\nIn a speech which lasted for over an hour, the 78-year-old former president also criticized his political opponent…",
        "url": "https://politics.slashdot.org/story/24/07/27/2141234/trump-says-hed-oppose-cbdcs-pardon-ulbricht-and-create-a-strategic-national-bitcoin-stockpile",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2024-07-27T21:45:00Z",
        "content": "JD Vance's couch / love of dolphins / dolphin couches.\r\nObviously, supporting Trump's \"drill, baby, drill\" position\r\n...\r\n:-)\r\nMore seriously on that note, does Trump, and his followers, know the U.S… [+454 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "CoinDesk",
        "title": "Could Sen. Lummis' Bitcoin Legislation Slash National Debt?",
        "description": "CoinDesk's Jennifer Sanasie takes a look back at what happened during the Bitcoin Conference in Nashville over the weekend, including former President Donald...",
        "url": "https://finance.yahoo.com/video/could-sen-lummis-bitcoin-legislation-192151604.html",
        "urlToImage": "https://media.zenfs.com/en/coindesk_75/de6bfcb451c94e994d6577f46c7df4dc",
        "publishedAt": "2024-07-29T19:21:51Z",
        "content": "CoinDesk's Jennifer Sanasie takes a look back at what happened during the Bitcoin Conference in Nashville over the weekend, including former President Donald Trump's promise of a \"strategic national … [+242 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Yousra Anwar Ahmed",
        "title": "What Happened in Crypto Today: Bullish Signals Are Finally Emerging!",
        "description": "From Bitcoin bouncing back above 56K to permanent holders quietly scooping up BTCs, here is a 3-minute breakdown of everything important that happened in...",
        "url": "https://finance.yahoo.com/news/happened-crypto-today-bullish-signals-101605599.html",
        "urlToImage": "https://media.zenfs.com/en/coinmarketcap_783/872d2769b8fc1e2c4b485faa1bfad75c",
        "publishedAt": "2024-08-07T10:16:05Z",
        "content": "What Happened in Crypto Today: Bullish Signals Are Finally Emerging!\r\nIt's been an interesting week in crypto, to put it mildly.\r\nJust four days ago, when Bitcoin was hovering around $62K, we hinted … [+7004 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "Bitcoin price crash: Why is the crypto market collapsing?",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_5f1ff72c-257b-4ef6-bc2a-c7c85f5106e9",
        "urlToImage": null,
        "publishedAt": "2024-08-05T14:29:22Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "Elon Musk’s Support for Donald Trump Could Boost Dogecoin Price to $0.51",
        "description": "The cryptocurrency market is experiencing a pivotal moment, attempting to break free from a two-month consolidation phase. This movement is… Continue reading Elon Musk’s Support for Donald Trump Could Boost Dogecoin Price to $0.51\nThe post Elon Musk’s Support…",
        "url": "https://readwrite.com/elon-musks-support-for-donald-trump-could-boost-dogecoin-price-to-0-51/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/elon-musk-support-for-donald-trump-could-boost-dogecoin-price-to-051.jpg",
        "publishedAt": "2024-07-23T16:31:12Z",
        "content": "The cryptocurrency market is experiencing a pivotal moment, attempting to break free from a two-month consolidation phase.\r\nThis movement is challenged by significant whale activity, with large holde… [+7378 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Brent D. Griffiths",
        "title": "Read JD Vance's financial disclosure, which includes at least $4 million in total assets and $250,000 in bitcoin",
        "description": "JD Vance's net worth easily totals into the millions, following a bestselling book and a stint in venture capital.",
        "url": "https://www.businessinsider.com/read-jd-vance-financial-disclosure-net-worth-bitcoin-fec-report-2024-8",
        "urlToImage": "https://i.insider.com/66bbaae95da406397bf58292?width=1200&format=jpeg",
        "publishedAt": "2024-08-13T19:14:16Z",
        "content": "Sen. JD Vance of Ohio filed his required financial disclosure as the Republican vice presidential nominee.Anna Moneymaker/Getty\r\n\u003Cul\u003E\u003Cli\u003ESen. JD Vance of Ohio filed his required annual financial disc… [+1786 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Mariella Moon",
        "title": "North Korean who used ransomware to attack US healthcare providers has been indicted",
        "description": "A grand jury in Kansas City has indicted Rim Jong Hyok, a North Korean intelligence operative who allegedly used ransomware to attack health providers' systems in the US, according to AP News. The State Department said Rim is part of a group called Andariel t…",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_5cf6a931-8e48-4282-baa8-9d59f3270937",
        "urlToImage": null,
        "publishedAt": "2024-07-26T14:00:08Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
     
      {
        "source": {
          "id": null,
          "name": "Golem.de"
        },
        "author": "Peter Steinlechner",
        "title": "Wahlkampf USA: Trump umgarnt Bitcoin-Community",
        "description": "In den USA besitzen rund 16 Prozent aller Erwachsenen Kryptowährungen. Das macht sie als Zielgruppe für Wahlkampfversprechen interessant. (Bitcoin, Marc Andreessen)",
        "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fwahlkampf-usa-trump-umgarnt-bitcoin-community-2407-187505.html&referer=https%3A%2F%2Ft.co%2F9fced73e20",
        "urlToImage": null,
        "publishedAt": "2024-07-28T10:36:02Z",
        "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Trump will speak at the Bitcoin conference tomorrow. Here’s what to expect.",
        "description": "Donald Trump, who has declared himself as a “crypto candidate,” will speak at the Bitcoin Conference in Nashville, Tennessee, tomorrow. While this would be the first time a presidential candidate attends the conference — the world’s biggest annual celebration…",
        "url": "https://qz.com/trump-speech-at-the-bitcoin-conference-1851602970",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/60da4425380cc4adcf24d8af8b160e68.jpg",
        "publishedAt": "2024-07-24T09:00:00Z",
        "content": "Donald Trump, who has declared himself as a crypto candidate, will speak at the Bitcoin Conference in Nashville, Tennessee, tomorrow. While this would be the first time a presidential candidate atten… [+2512 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "AI-powered Bitcoin mining would be a game changer — but not without challenges",
        "description": "Artificial intelligence is rapidly making its way into nearly every industry, and Bitcoin mining is no exception. The process of generating new Bitcoin by solving complex mathematical problems has grown increasingly competitive and intriguing, prompting miner…",
        "url": "https://qz.com/ai-bitcoin-mining-1851623128",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3f8846c172fc06962509557fdd1c8aef.jpg",
        "publishedAt": "2024-08-19T09:00:00Z",
        "content": "Artificial intelligence is rapidly making its way into nearly every industry, and Bitcoin mining is no exception. The process of generating new Bitcoin by solving complex mathematical problems has gr… [+4760 chars]"
      },
      
      
    ]
  

  constructor(){
    super();
    console.log("Hellow I am a Comstructor from News Component");
    this.state={
      articles : this.articles,
      location:false

    }
  }
  
  componentDidMount(){
    
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>New Monkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
        return <div className="col-md-4">
          <Newsitem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}

          
        
       
        

        </div>
      </div>
    )
  }
}

export default Newpa
