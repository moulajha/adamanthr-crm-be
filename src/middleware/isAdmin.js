import CONSTANTS from "../utils/const";
import { errorHandler } from "../utils/commonErrorhandler";

const isAdmin = (req, res, next) => {
  if (req.user.type !== CONSTANTS.ROLE_TABLE.values.ADMIN){
    errorHandler("Not authorized", res, CONSTANTS.ERROR_CODES.UNAUTHORIZED)
  }
  else{
    next()
  }

};

export default isAdmin;
