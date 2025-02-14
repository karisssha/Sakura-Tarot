import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <img src="src/assets/img/infoButton.png" alt="Info Icon" className={styles.icon} />
        How to use this page?
      </h1>
      <div className={styles.instructionsBox}>
        <ol className={styles.instructions}>
          <li>Type your name in the "name" section.</li>
          <li>Press the "Start" button.</li>
          <li>Select 3 cards from the desk.</li>
          <li>You can see the meaning of the card with the "Meaning" button.</li>
          <li>You can save the reading with the "Save" button.</li>
          <li>You can restart the reading with the "Restart" button.</li>
          <li>You can go to your reading’s history with the "See history" button.</li>
          <li>You can also delete your history with the "Delete history" button.</li>
          <li>You can easily mute the page sounds by clicking on the sound button.</li>
        </ol>
      </div>
      <img src="src/assets/img/flyingKero.png" alt="Kero2" className={styles.kero2} />
    </div>
  );
};

export default Info;
  