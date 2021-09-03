"use strict";

var _express = _interopRequireDefault(require("express"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.get("/medias/:mediaId", async (req, res) => {
  const {
    mediaId
  } = req.params;
  await _axios.default.get(process.env.API_SAMBATECH_HOST + `/medias/${mediaId}`, {
    params: {
      access_token: process.env.ACESS_TOKEN,
      pid: process.env.PID_CODE
    }
  }).then(({
    data
  }) => {
    return res.json(data).status(200);
  }).catch(err => {
    return res.status(400).json({
      message: err.message
    });
  });
});
app.listen(process.env.PORT | 3333, () => {
  console.log(`API is running`);
});