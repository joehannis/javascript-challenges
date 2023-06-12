const notifyByEmail = (email) => {
  console.log(`Email sent to: ${email}`);
}

const notifyByText = (phone) => {
  console.log(`Text sent to: ${phone}`);
}

const notify = (string, notifyFunction) => {
  return (notifyFunction(string));
}

notify("hello@makers.tech.test", notifyByEmail)
notify("+10000000000", notifyByText);