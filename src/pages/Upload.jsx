import { useState } from "react";
import Loading from "../components/Loading"; 

export default function UploadMovie() {
  const [formData, setFormData] = useState({
    title: "",
    releaseDate: "",
    genre: "",
    overview: "",
    posterPath: "",
    backdropPath: "",
    language: "",
    productionCountries: "",
    productionCompanies: "",
    adult: false,
    spokenLanguages: "",
    popularity: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Function to upload file to Vercel API
  const uploadImageToVercel = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Upload successful!");

        setTimeout(() => {
          setMessage(null);
        }, 5000);


         // Retyrn the uploadd file URL
        return result.url; 
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setMessage("Failed to upload image");

      setTimeout(() => {
        setMessage(null);
      }, 5000);

      // throw error
      throw error; 
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (e, key) => {
    const file = e.target.files[0];
    if (file) {
      try {
        setLoading(true);
        const imageUrl = await uploadImageToVercel(file);
        setFormData((prev) => ({ ...prev, [key]: imageUrl }));
        console.log(`Image uploaded: ${imageUrl}`);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,  
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Use a timestamp as a unique ID

    const newMovie = { ...formData, id: Date.now() }; 
    try {
      const response = await fetch("https://6763337017ec5852cae863a0.mockapi.io/movies/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      });

      if (!response.ok) {
        throw new Error("Failed to upload movie");
      }

      const data = await response.json();
      console.log("Movie uploaded:", data);
    } catch (error) {
      console.error("Error uploading movie:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col justify-center items-center py-10">
      <div className="text-3xl w-[300px] text-center font-black text-orange-700 mb-10"> 
        Upload Your Movie to T-Series
      </div>
      
      {loading && <div className="w-full h-full bg-black/40 absolute flex items-center justify-center"><Loading uploading={"upload"}/></div>}

      <form
        onSubmit={handleUpload}
        className="space-y-3 gap-10 flex flex-col px-7 sm:flex-row justify-around w-full sm:w-4/5 md:w-4/6 lg-w-1/2">
        
        
        <div className="w-full space-y-3 flex flex-col items-center">
          {[
            { label: "Title", name: "title", type: "text" },
            { label: "Genre", name: "genre", type: "text" },
            { label: "Release Date", name: "releaseDate", type: "number" },
            { label: "Popularity", name: "popularity", type: "number" },
            { label: "Language", name: "language", type: "text" },
          ].map(({ label, name, type }) => (
            <div className="flex flex-col" key={name}>
              <label className="text-white/70" htmlFor={name}>
                {label}:
              </label>
              <input
                id={name}
                name={name}
                type={type}
                value={formData[name]} 
                onChange={handleInputChange}
                className="border-x-2 border-b-2 border-black/70 bg-black/20 rounded-md max-w-[270px] text-orange-700 blg-transparent hover:border-orange-700 outline-none px-3 py-1"
              />
            </div>
          ))}

          <div className="flex space-x-3">
            <label className="text-white/70 font-black" htmlFor="adult">
              Adult Content:
            </label>
            <input
              id="adult"
              name="adult"
              type="checkbox"
              checked={formData.adult} 
              onChange={handleInputChange}
              className="border rounded-md text-orange-700 bg-white/70 hover:border-orange-700 outline-none px-3 py-1"
            />
          </div>
        </div>

        {/* Second Column of Inputs */}
        <div className="w-full space-y-3 flex flex-col items-center">
          {[
            { label: "Production Countries", name: "productionCountries", type: "text" },
            { label: "Production Companies", name: "productionCompanies", type: "text" },
            { label: "Spoken Languages", name: "spokenLanguages", type: "text" },
          ].map(({ label, name, type }) => (
            <div className="flex flex-col" key={name}>
              <label className="text-white/70" htmlFor={name}>
                {label}:
              </label>
              <input
                id={name}
                name={name}
                type={type}
                 // Bind value from formData to the input
                value={formData[name]}
                onChange={handleInputChange} 
                className="border-x-2 border-b-2 bg-black/20 border-black/70 rounded-md max-w-[270px] text-orange-700 hover:border-orange-700 outline-none px-3 py-1"
              />
            </div>
          ))}

          <div className="flex flex-col">
            <label className="text-white/70" htmlFor="overview">
              Overview:
            </label>
            <textarea
              id="overview"
              name="overview"
              value={formData.overview}
              onChange={handleInputChange}
              className="border-x-2 border-b-2 border-black/70 rounded-md bg-black/20 text-orange-700 min-h-[90px] hover:border-orange-700 outline-none px-3 py-1"
            ></textarea>
          </div>

          {/* File Uploads */}
          <div className="flex w-full gap-10 flex-col py-3 sm:flex-row relative justify-center items-center">
            <p className="text-white absolute -top-3">{message && message}</p>
            {[
              { label: "Poster Path", name: "posterPath" },
              { label: "Backdrop Path", name: "backdropPath" },
            ].map(({ label, name }) => (
              <div className="flex flex-col" key={name}>
                <label className="text-white/70 font-black text-sm" htmlFor={name}>
                  {label}:
                </label>
                <input
                  id={name}
                  type="file"

                  // Call handleFileChange fr file upload
                  onChange={(e) => handleFileChange(e, name)} 
                  className="border w-full text-sm rounded-md text-orange-700 bg-white/70 hover:border-orange-700 outline-none px-3 py-1"
                />
              </div>
            ))}
          </div>
          
          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="border py-1 px-5 font-black text-black/80 bg-orange-700 rounded-md hover:bg-transparent hover:text-orange-700 hover:border transition-colors duration-200">
              Upload Movie
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
