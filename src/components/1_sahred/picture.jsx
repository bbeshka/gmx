function Pictur(prpos) {
	return (
		<div className="imagediv">
			<picture>
				<source srcSet={`/img/webp/${prpos.e}.webp`} type="image/webp" />
				<source srcSet={`/img/jpg/${prpos.e}.jpeg`} type="image/jpeg" />
				<img
					className="imageBlock d-block"
					src={`/img/jpg/${prpos.e}.jpeg`}
					alt="image, idk who is"></img>
			</picture>
		</div>
	);
}

export default Pictur;
