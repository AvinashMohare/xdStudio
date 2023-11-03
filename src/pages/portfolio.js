import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import classes from "../styles/CanvasSection.module.scss";

async function fetchImagesFromStorage() {
    const storageRef = ref(storage, "assets/artworks");
    const images = [];

    try {
        const artworksFolderContents = await listAll(storageRef);
        for (const item of artworksFolderContents.items) {
            const downloadURL = await getDownloadURL(item);
            images.push(downloadURL);
        }
    } catch (error) {
        console.error("Error fetching images from Firebase Storage:", error);
    }

    return images;
}

const Portfolio = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImagesFromStorage().then((fetchedImages) => {
            setImages(fetchedImages);
            setLoading(false);
        });
    }, []);

    return (
        <div className={classes.grid}>
            {loading // Skeleton loader
                ? Array.from({ length: 8 }, (_, index) => (
                      <div className={classes.cardSkeleton} key={index}></div>
                  ))
                : images.map((imageURL, index) => (
                      <div
                          className={classes.card}
                          key={index}
                          style={{ backgroundImage: `url(${imageURL})` }}
                      ></div>
                  ))}
        </div>
    );
};

export default Portfolio;
