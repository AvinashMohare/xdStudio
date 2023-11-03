import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import classes from "../styles/CanvasSection.module.scss";

async function fetchImagesFromStorage() {
    const storageRef = ref(storage, "assets/music");
    const images = [];

    try {
        const musicFolderContents = await listAll(storageRef);
        for (const item of musicFolderContents.items) {
            const downloadURL = await getDownloadURL(item);
            images.push(downloadURL);
        }
    } catch (error) {
        console.error("Error fetching images from Firebase Storage:", error);
    }

    return images;
}

const MusicCovers = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImagesFromStorage().then((fetchedImages) => {
            setImages(fetchedImages);
        });
    }, []);

    return (
        <div className={classes.grid}>
            {images.map((imageURL, index) => (
                <div
                    className={classes.card}
                    key={index}
                    style={{ backgroundImage: `url(${imageURL})` }}
                ></div>
            ))}
        </div>
    );
};

export default MusicCovers;
