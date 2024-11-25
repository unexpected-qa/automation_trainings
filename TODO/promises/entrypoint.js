const promises = require("./promises")

function mainSync() {
  console.log("Just calling promises")
  promises.doSomethingLong()
    .then(() => console.log("doSomethingLong() resolved"))
    .catch(err => console.log("doSomethingLong() rejected", err))
  promises.doSomethingRapid()
    .then(() => console.log("doSomethingRapid() resolved"))
    .catch(err => console.log("doSomethingRapid() rejected", err))
  promises.doSomethingVeryLong()
    .then(() => console.log("doSomethingVeryLong() resolved"))
    .catch(err => console.log("doSomethingVeryLong() rejected", err))
  promises.doSomethingVeryRapid()
    .then(() => console.log("doSomethingVeryRapid() resolved"))
    .catch(err => console.log("doSomethingVeryRapid() rejected", err))
  promises.doSomethingThatFails()
    .then(() => console.log("doSomethingThatFails() resolved"))
    .catch(err => console.log("doSomethingThatFails() rejected", err))
  promises.doSomethingThatResolvesToAnObject()
    .then(result => console.log("doSomethingThatResolvesToAnObject() resolved", result))
    .catch(err => console.log("doSomethingThatResolvesToAnObject() rejected", err))
}

async function mainAsync() {
  try {
    await promises.doSomethingLong()
  } catch (e) {
    console.error(e)
  } finally {
    console.log("All promises handled")
  }
}

mainSync()
mainAsync()
  .then(() => console.log("Main async is finished"))