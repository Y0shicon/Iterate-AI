// Import styles
import styles from "@styles/AppCards.module.scss";

// Import Image component
import Image from "next/image";

export default function AppCard({ response, image }) {
  const features = response.features.map((feature, index) => {
    return (
      <div key={index} className={styles.feature}>
        <h3>{feature.title}</h3>
        <p>{feature.desc}</p>
      </div>
    );
  });
  return (
    <div className={styles.card}>
      <Image src={image.url} alt={response} width={100} height={100} priority />
      <div className={styles.content}>
        <h2>{response.name}</h2>
        {features}
      </div>
    </div>
  );
}
