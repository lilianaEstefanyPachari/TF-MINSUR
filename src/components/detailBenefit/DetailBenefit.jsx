import React from 'react';
import styles from './DetailBenefit.module.css';
import icon from '../../components/home/iconsHome/icon1.png'
import { Stack } from '@mui/material';
import { AiOutlineHeart, AiOutlineCheck } from 'react-icons/ai';
const DetailBenefit = () => {

    return (
        <section className={styles.container}>
        <div className={styles.divcontainerheader}>
            <div className={styles.divheader}>Detalle de beneficio</div>
        </div>
            <div className={styles.divImage}>
                    <img src={icon} />
            </div>
            <div className={styles.containerTitle}>
                <h2 className={styles.title}>Convenios</h2>
                    <div className={styles.divHeart}>
        <AiOutlineHeart
		style={{ margin: 20, fontSize: 40, color: '#768998' }}
		/>
        </div>
            </div>
    
        <div className={styles.description}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
        Euismod tincidunt ut laoreet dolore magna aliquam erat lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </div>
        <div className={styles.title2}>
            Aplica:
        </div>
        <div className={styles.descripList}>
            <AiOutlineCheck
						style={{
							fontSize: 20,
							color: '#41B6E6',
							marginTop: 5,
							marginRight: 5,
						}}
					/>{' '}Aliquam erat lorem ipsum dolor sit amet. <br />
        	<AiOutlineCheck
						style={{
							fontSize: 20,
							color: '#41B6E6',
							marginTop: 5,
							marginRight: 5,
						}}
					/>{' '}Aliquam erat lorem ipsum dolor sit amet. <br />
           <AiOutlineCheck
						style={{
							fontSize: 20,
							color: '#41B6E6',
							marginTop: 5,
							marginRight: 5,
						}}
					/>{' '}Aliquam erat lorem ipsum dolor sit amet. <br />
            <AiOutlineCheck
						style={{
							fontSize: 20,
							color: '#41B6E6',
							marginTop: 5,
							marginRight: 5,
						}}
					/>{' '}Aliquam erat lorem ipsum dolor sit amet. <br />
            <AiOutlineCheck
						style={{
							fontSize: 20,
							color: '#41B6E6',
							marginTop: 5,
							marginRight: 5,
						}}
					/>{' '}Aliquam erat lorem ipsum dolor sit amet.
        </div>
        <button className={styles.btnApply}>Solicitar beneficio</button>
        <Stack
				sx={{
                    backgroundColor:'#003DA5',
					color: '#FFFFFF',
					fontWeight: '700',
					margin: '0 auto',
					justifyContent: 'center',
					alignItems: 'center',
                    width: '100%',
                    position: 'fixed',
                    bottom: '0'
				}}
			>
				<p>Powered by squad Minsur</p>
			</Stack>
        </section>
    )
}

export default DetailBenefit;