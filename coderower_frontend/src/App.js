import axios from "axios";
import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [fetchApiResponse, setFetchApiResponse] = useState(null);

  const [updateId, setUpdateId] = useState("");
  const [theRemark, setTheRemark] = useState("");
  const [updateApiResponse, setUpdateApiResponse] = useState(null);

  const handleFetchSubmit = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/configurations/${id}`
      );
      console.log("Input Value:", id);
      console.log("API Response:", response.data);
      setFetchApiResponse(response.data);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  const handleUpdateSubmit = async () => {
    try {
      console.log("Input Value:", updateId);
      const response = await axios.put(
        `http://localhost:8080/api/configurations/${updateId}`,
        { remark: `${theRemark}` }
      );
      console.log("API Response:", response.data);
      setUpdateApiResponse(response.data);
    } catch (error) {
      console.error("Error Updating data from API:", error);
    }
  };

  return (
    <div className="h-full lg:h-screen p-10 bg-blue-400 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
      <div className="flex flex-col space-y-4 p-10 border border-black lg:h-2/3 h-auto">
        <h1 className="text-4xl font-bold font-serif">Fetch Config</h1>
        <div className="p-[1px] bg-black"></div>
        <form className="flex flex-col space-y-5 items-start pt-5">
          <div className="flex flex-row space-x-2 text-md">
            <h3 className="text-xl">Config To Load (configId):</h3>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-48 border border-black bg-blue-200 rounded"
            ></input>
          </div>
          <button
            type="button"
            onClick={handleFetchSubmit}
            className="border-2 border-white text-white bg-black px-2 text rounded bg-green-"
          >
            Submit
          </button>
        </form>
        <p>
          {`Click the "Submit" button and the configId with this if will get from "http://localhost:8080/api/configurations/{id}" and shown below.`}
        </p>
        {fetchApiResponse && (
          <div>
            <h1 className="text-lg font-bold font-serif">{`Result: http://localhost:8080/api/configurations/${id}`}</h1>
            <pre>{JSON.stringify(fetchApiResponse, null, 2)}</pre>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-4 p-10 border border-black lg:h-2/3 h-auto">
        <h1 className="text-4xl font-bold font-serif">Update Remark</h1>
        <div className="p-[1px] bg-black"></div>
        <form className="flex flex-col space-y-5 items-start pt-5">
          <div className="flex flex-row space-x-2 text-md">
            <h3 className="text-xl">Config To Load (configId):</h3>
            <input
              value={updateId}
              onChange={(e) => setUpdateId(e.target.value)}
              type="text"
              className="w-48 border border-black bg-blue-200 rounded"
            ></input>
          </div>
          <div className="flex flex-row space-x-2 text-md">
            <h3 className="text-xl">Remark</h3>
            <textarea
              value={theRemark}
              onChange={(e) => setTheRemark(e.target.value)}
              rows={2}
              className="w-48 border border-black bg-blue-200 rounded"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleUpdateSubmit}
            className="border-2 border-white text-white bg-black px-2 text rounded bg-green-"
          >
            Submit
          </button>
        </form>
        <p>
          {`Click the "Submit" button - the configId and remark will be "PUT" on api "http://localhost:8080/api/configurations/{id}" and remark field gets updated for the provided configId.`}
        </p>
        {updateApiResponse && (
          <div>
            <h1 className="text-lg font-bold font-serif">{`Result: http://localhost:8080/api/configurations/${id}`}</h1>
            <pre>{JSON.stringify(updateApiResponse, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
