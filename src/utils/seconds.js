import moment from "moment";

const secound =  (secounds) => moment.utc(secounds * 1000).format("mm:ss")

export default secound