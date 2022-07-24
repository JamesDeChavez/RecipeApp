
const YoutubePage = () => {

    const search = 'Chicken Parm Recipe';
    const searchReplaced = search.replaceAll(' ', '%20');
    const apiKey = '';

    console.log(searchReplaced);

    const onClick = async (e: any) => {
        e.preventDefault();

        const res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchReplaced}&key=${apiKey}`
        );
        const data = await res.json();

        console.log(data);
    }

    return (
        <div className='YoutubePage'>
            <h3>Youtube API Page</h3>
            <button onClick={onClick}>Search</button>
        </div>
    )
}

export default YoutubePage;