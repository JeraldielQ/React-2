import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  const snacksCount = snacks.length;
  const drinksCount = drinks.length;

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>
            We have {snacksCount} food items (snacks) and {drinksCount} drink choices (drinks).
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;

