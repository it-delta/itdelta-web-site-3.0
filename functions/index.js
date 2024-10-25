const admin = require("firebase-admin");
const {onDocumentWritten} = require("firebase-functions/v2/firestore");
const serviceAccount = require('./service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
exports.onChangeDocumentBlogs = onDocumentWritten("blogs/{docId}", async () => {
// URL маршрута
    const url = process.env.BLOGS_CACHE_CLEAR_URL
    try {
        let response = await fetch(url);
        let result = await response.json();
        console.log(result.message);
    }
    catch (e) {
        console.log("ERROR", e)
    }


    return null;
});

exports.onChangeDocumentsCases = onDocumentWritten("cases/{docId}", async () => {
// URL маршрута
    const url = process.env.CASES_CACHE_CLEAR_URL
    try {
        let response = await fetch(url);
        let result = await response.json();
        console.log(result.message);
    }
    catch (e) {
        console.log("ERROR", e)
    }


    return null;
});