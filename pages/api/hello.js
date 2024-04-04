export default async function handler(req, res) { 
    console.log("Before wait");
    await new Promise(resolve => setTimeout(resolve, 12000));
    console.log("After wait");
    res.status(200).json({ text: 'Hello hello after a long time' });
}
