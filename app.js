const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/:searchQuery", async (req, res) => {
  try {
    const { searchQuery } = req.params;

    const response = await axios.get(
      `https://api.winnipegtransit.com/v1/stops:${searchQuery}.json?api-key=dBBQriFutTiTHOkaMhpI`
    );
    res.json(response.data);
  } catch (e) {
    console.error("Error fetching data: ", e.message);
    res.status(500).json({
      error: "Failed to fetch data",
      message: e.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
