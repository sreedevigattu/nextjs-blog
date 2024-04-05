export default async function handler(req, res) { 
    console.error("Before wait");
    await new Promise(resolve => setTimeout(resolve, 12000));
    
    console.error("After wait");
    res.status(200).json({ text: 'Hello hello after a long time' });
}