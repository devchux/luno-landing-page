import { TrustTopCurveLogo } from "../../assets/icons";
import Accordion from "../accordion/Accordion";
import Title from "../title/Title";

const Faq = () => {
  return (
    <div>
      <TrustTopCurveLogo className="bg-primary text-white" />
      <div>
        <Title title="Frequently asked questions" />
        <div className="p-10 px-56">
          <div>
            <Title
              title="Using luno"
              notCenter
              font="text-2xl"
              className="py-6"
            />
            <Accordion title="Why should i choose luno?">
              We're industry pioneers, having been in the cryptocurrency
              industry since 2013. We've facilitated more than 21 billion USD
              worth of transactions on our exchange for customers in over 40
              countries. Today, we're trusted by over 8 million customers around
              the world and have received praise for our easy-to-use app, secure
              wallet, and range of features.
            </Accordion>
            <Accordion title="How secure is luno?">
              At Luno, the security of your cryptocurrency is our highest
              priority. We've built one of the world's most sophisticated
              Bitcoin security systems and have industry-leading processes in
              place to make sure that these are never compromised.
            </Accordion>
          </div>
          <div>
            <Title
              title="Buying Bitcoin"
              notCenter
              font="text-2xl"
              className="py-6"
            />
            <Accordion title="Do I have to buy a whole Bitcoin?">
              No. Bitcoin and most other cryptocurrencies are divisible. This
              means you can buy or sell any amount of Bitcoin and it doesn’t
              need to be a whole number – whether it’s 0.1 Bitcoin, 1.7539
              Bitcoin or something else. It’s completely up to you and your
              budget.
            </Accordion>
            <Accordion title="How do I actually buy Bitcoin?">
              You can buy Bitcoin through the Instant Buy function on our app,
              as well as on our Exchange. After you’ve signed up with Luno, you
              can deposit local currency to your account and then all you need
              to do is follow the instructions.
            </Accordion>
          </div>
          <div>
            <Title
              title="Buying crypto with AUD"
              notCenter
              font="text-2xl"
              className="py-6"
            />
            <Accordion title="How do I make a deposit with a Bank Transfer in Australia?">
              Sign in to the Luno app, select Wallets, then Deposit on your AUD
              wallet. From there, follow these easy steps:
              <ol class="list-decimal">
                <li>From the selection choose Bank Transfer</li>
                <li>Enter the amount you'd like to deposit</li>
                <li>
                  Next, you’ll see a BSB and an account number - these are
                  personalised for you. Whenever you make a deposit to Luno,
                  please use these details
                </li>
                <li>
                  Log in to your banking app and make a deposit using the bank
                  details provided. You can leave the reference field empty
                </li>
                <li>
                  Funds can take anywhere from a few seconds up to 2 business
                  days to appear in your AUD wallet – this is dependent on your
                  financial institution
                </li>
                <li>
                  Once funds have arrived in your wallet, you’ll be able make
                  your crypto purchase
                </li>
              </ol>
              Check out our{" "}
              <span className="text-blue-500">help centre article</span> for
              more information on funding your AUD wallet.
            </Accordion>
            <Accordion title="Can I use PayID to buy Bitcoin in Australia?">
              Our PayID deposit method allows Australian customers to deposit
              money directly into their Luno wallets, instantly. After verifying
              your identity, you can deposit money into your AUD wallet in a few
              easy steps. Sign in to the Luno app, select Wallets, then Deposit
              on your AUD wallet. For the step-by-step instructions check out
              this <span className="text-blue-500">help centre article</span>.
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
