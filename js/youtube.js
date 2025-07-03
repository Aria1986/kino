

const KEY = "AIzaSyC22Xffl8FgSnh84zyPWecBpkLA76Fxx2I";
const CHAINE_ID = "UCsAI-rzMsGGmUna8RErlJCQ";
const PLAYLIST_ID = "UUsAI-rzMsGGmUna8RErlJCQ"
export async function getLatestVideos(channelId, maxResults = 6) {
    try {
        // Étape 1: Récupérer l'ID de la playlist "uploads" de la chaîne
        // const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHAINE_ID}&key=${KEY}`;
        const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=6&order=date&key=${KEY}`
        
        const playlistResponse = await fetch(videosUrl);
        const playlistData = await playlistResponse.json();
      
        if (!playlistResponse.ok) {
            throw new Error(`Erreur API: ${playlistData.error?.message || 'Erreur inconnue'}`);
        }
        
        // Étape 3: Formater les données des vidéos
        const videos = playlistData.items.map(item => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumbnail: item.snippet.thumbnails.medium.url,
            url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
        }));
        console.log(videos)
        return videos;
    } catch (error) {
        console.error('Erreur lors de la récupération des vidéos:', error);
        throw error;
    }
}


getLatestVideos();