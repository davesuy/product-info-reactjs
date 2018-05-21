import React from "react";
import ReactDOM from "react-dom";


const class_name = "app-cm";
const class_count = document.getElementsByClassName(class_name).length;


for(var i=0; i < class_count; i++) {

	class_cm = "";

	if(document.getElementsByClassName(class_name)[i].querySelector(".app-embedd") !== null) {

		var class_cm = document.getElementsByClassName(class_name)[i].querySelector(".app-embedd").getAttribute("idx");
	
	}

	
	//console.log(class_cm);


	class AtlasComponent extends React.Component {


		constructor() {
			super();
		
			this.state = {

				atlas_title: "",
				atlas_content: "",
				feat_media: "",
				scientific_name: "",
				tank_size: "",
				tank_type: "",
				experience_required: "",
				characteristic: "",
				diet: "",
				lighting: "",
				caution: "",
				care_atlas_qr_code: "",
	

			};

		}


		componentDidMount() {	
			
			var myInit = { 
				method: 'GET',
               //headers: myHeaders,
               //mode: 'cors',
               //cache: 'no-store' 
           };

			fetch("https://cmmarket.wpengine.com/wp-json/wp/v2/care_atlas?custom_item_id=" + class_cm, myInit)
			.then(response => {

				  return response.json();

			}).then(response => {
				
				// if(!response[0].acf) {
				// 	return (<h4>Select a user...</h4>);
				// }

				var atlas_title = response[0].acf.atlas_title;
				var atlas_title_output = <div key={atlas_title} dangerouslySetInnerHTML={{ __html: atlas_title }} />;
				

				var atlas_content = response[0].acf.atlas_content;
				var atlas_content_output = <div key={atlas_content} dangerouslySetInnerHTML={{ __html: atlas_content }} />;

				var feat_media = response[0].acf.atlas_image;

				var scientific_name = response[0].acf.scientific_name;
				var tank_size = response[0].acf.tank_size;
				var tank_type = response[0].acf.tank_type;
				var experience_required = response[0].acf.experience_required;
				var characteristic = response[0].acf.characteristic;
				var diet = response[0].acf.diet;
				var lighting = response[0].acf.lighting;
				var caution = response[0].acf.caution;

				var care_atlas_qr_code = response[0].acf.care_atlas_qr_code;
				var care_atlas_qr_code_output = <div key={care_atlas_qr_code} dangerouslySetInnerHTML={{ __html: care_atlas_qr_code }} />;

				//console.log(response[0].acf.atlas_images);

				var atlas_images = response[0].acf.atlas_images;

				var atlas_image = <div className='care-atlas-img-con'><img src={atlas_images[0].atlas_image} className='aligncenter care-atlas-img' /></div>;

				  //for (//i = 0; i //< atlas_images.length; i++)// { 
				// 	console.log(atlas_images[i].atlas_image)

				// 	atlas_image.push(<div className='care-atlas-img-con' key={'cai' + i}><img src={atlas_images[i].atlas_image} key={i} className='aligncenter care-atlas-img' /></div>);
				
				// }




				this.setState({

					atlas_title: atlas_title_output,
					scientific_name: scientific_name,
					atlas_content: atlas_content_output,
					feat_media: feat_media,
					atlas_image: atlas_image,
					tank_size: tank_size,
					tank_type: tank_type,
					experience_required: experience_required,
					characteristic: characteristic,
					diet: diet,
					lighting: lighting,
					caution: caution,
					care_atlas_qr_code: care_atlas_qr_code_output

				});

			});

		}

		render() {
	
			return (

				
				<div className='row care-atlas-popup-container'>

					<div className='care-atlas-content-con  col-md-12'>
						<h1 className='atlas-title'>{this.state.atlas_title}</h1>
						<h2 className='scientific-name'>{this.state.scientific_name}</h2>
					</div>

					
					<div className='no-atlas-bxslider col-md-12'>
							
						{this.state.atlas_image}
														
					</div>

					<div className='care-atlas-popup-sidebar col-md-12'>
					
						<div className='row'>

							<div className='col-md-9'>

								<div className='row'>

									<div className="col-md-12">
										<h2 className='quic-facts-heading'><strong>QUICK FACTS</strong></h2>
									</div>

								</div>

								<div className="col-md-6">

									<p><strong><i className="fa fa-window-maximize"></i> Tank size: </strong> {this.state.tank_size}</p>
									<p><strong><i className="fa fa-question-circle"></i> Tank type: </strong> {this.state.tank_type}</p>
									<p><strong><i className="fa fa-graduation-cap"></i> Experience required: </strong> {this.state.experience_required}</p>
									<p><strong><i className="fa fa-search-plus"></i>Characteristic: </strong> {this.state.characteristic}</p>

								</div>

								<div className="col-md-6">

									<p><strong><i className="fa fa-calendar"></i> Diet: </strong> {this.state.diet}</p>
									<p><strong><i className="fa fa-asterisk"></i> Lighting: </strong> {this.state.lighting}</p>
									<p><strong><i className="fa fa-exclamation-triangle"></i> Caution: </strong> {this.state.caution}</p>

								</div>

							</div>


							<div className="qr-code-con col-md-3">

								{this.state.care_atlas_qr_code}

							</div>

						</div>

					</div>

					<div className="care-atlas-content-con col-md-12">

						<div className='atlas-content'>

							{this.state.atlas_content}

						</div>

					</div>

				
				
				</div>
			);

		}

	}

	ReactDOM.render(

			<AtlasComponent />,document.getElementsByClassName(class_name)[i].querySelector(".app-embedd")

		
	);

}

