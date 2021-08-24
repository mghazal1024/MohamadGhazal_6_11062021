// Load data
const LoadData = async () => {
    try {
        const url = "json/photographersData.json";
        const result = await fetch(url);
        const data = await result.json(); 
        return data;
    } catch (err) {
        console.error(err);
    }
}

export default LoadData;







