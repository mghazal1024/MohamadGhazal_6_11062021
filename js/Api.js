// Load data
const LoadData = async () => {
    try {
        const url = "/data.json";
        // const url = "/MohamadGhazal_6_11062021/data.json"
        const result = await fetch(url);
        const data = await result.json(); 
        return data;
    } catch (err) {
        console.error(err);
    }
}

export default LoadData;