const sendResponse = async (req, res, code,redirect="", message="", data) => {
    try {
      return res.status(code).send({
        code: code,
        status: "Success",
        message: message,
        redirect:redirect,
        result: data,
      });
    } catch (error) {
      throw error;
    }
  };
  
  export default sendResponse;
  