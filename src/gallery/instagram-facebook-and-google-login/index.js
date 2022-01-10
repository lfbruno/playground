import React, { useState, Fragment } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import InstagramLogin from 'react-instagram-login';
import Navbar from './navbar-with-login';

export default function Main() {
    const [data, setData] = useState({
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
            picture: ""
        });
    const responseGoogle = (response) => {
      setData({
        isLoggedIn: true,
        userID: response.tokenId,
        name: response.profileObj.familyName, //change to givenName
        email: response.profileObj.email,
        picture: response.profileObj.imageUrl,

      });
    }

    const responseFacebook = (response) => {
      // console.log(response);
      setData({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,

      });
    }

    const responseInstagram = (response) => {
      console.log(response);
    }

    const componentClicked = () => console.log(process.env.REACT_APP_SOCIAL_FACEBOOK);

    let fbContent;

    return (
        <Fragment>
            <Navbar dataLogin={data} />
            <GoogleLogin
                clientId={process.env.REACT_APP_SOCIAL_GOOGLE}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <InstagramLogin
              clientId={process.env.REACT_APP_SOCIAL_INSTAGRAM}
              buttonText="Enter with Insta"
              onSuccess={responseInstagram}
              onFailure={responseInstagram}
            />
            {data.isLoggedIn ?
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexFlow: 'column',
                    width: '400px',
                    margin: 'auto',
                    backgroundColor: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img style={{width: "3rem", height: "3rem"}} src={data.picture} alt={data.name}/>
                    <h1>Welcome {data.name}!</h1>
                    Email: {data.email}
                </div> :
                <FacebookLogin
                    appId={process.env.REACT_APP_SOCIAL_FACEBOOK}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
            }
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus repellendus ab nulla, temporibus ratione totam iure, asperiores quaerat consectetur, officiis alias! Earum blanditiis fugiat, obcaecati maiores provident minus nemo, voluptatem!</div>
            <div>Recusandae expedita aut vero labore minus, nostrum explicabo eum, quidem ipsum. Nemo voluptatibus quae rerum harum dolorum voluptatum ut adipisci, illo deleniti, eum pariatur sapiente! Dolore reprehenderit reiciendis libero veritatis.</div>
            <div>Temporibus esse a corrupti facere enim voluptatibus itaque repellendus dolorum, beatae, ipsum. Doloremque soluta nobis eum commodi temporibus, exercitationem praesentium, dignissimos, ad autem atque fuga reiciendis aliquid facilis, vitae odio.</div>
            <div>Nobis voluptate quasi cupiditate accusamus illo nostrum, repellendus odit sequi non, aperiam exercitationem iste, molestiae earum. Ducimus, illo, itaque. Est ut expedita eos, commodi, dicta dolores quo consectetur quas eum.</div>
            <div>Esse, molestiae! Ducimus vero non necessitatibus, deserunt omnis corporis? Amet eligendi, laboriosam odit modi beatae ex vel quae tempora corporis iste! Fuga, molestiae autem dolor nesciunt voluptatibus quasi atque quae!</div>
            <div>Incidunt doloribus similique reiciendis, qui consequatur, provident explicabo ut sequi suscipit quae, nulla, voluptatum animi nam perferendis. Atque ex cum, nihil consequuntur molestiae, voluptates incidunt distinctio beatae ducimus, fugiat doloribus.</div>
            <div>Explicabo libero ducimus velit quas aut aspernatur eligendi hic sed dolorum, corporis beatae iste laboriosam minus odio, non, illum nulla placeat vel aliquam pariatur. Omnis doloremque incidunt soluta minus ratione.</div>
            <div>Excepturi maxime ad, et soluta illo sunt laboriosam autem rem nostrum cumque quis, labore vero nam similique consequuntur est unde. Esse illo animi nisi ab asperiores eum dignissimos deleniti alias.</div>
            <div>Doloremque enim, fugit est minima distinctio? Voluptatum iusto dolorem laudantium earum dicta amet minima deleniti inventore, ducimus sint. Facilis labore similique, voluptatibus dolore est! Hic numquam eum, debitis dolores. Voluptates.</div>
            <div>Beatae facilis deleniti numquam neque, maiores, cumque labore ad facere eos delectus aperiam necessitatibus optio laboriosam aliquid, quidem possimus. Sunt dolorem voluptatibus sapiente, quidem rerum illo eveniet voluptate iure quam.</div>
            <div>Neque alias natus minima voluptatem aspernatur, quod ipsa cumque vitae illo magnam. Pariatur dolorum quis perspiciatis aut mollitia saepe, magni velit iusto iure sed! Cum eum tempore quod sit ab.</div>
            <div>A voluptatem ipsam quod atque cum, illum nihil rerum aliquid, velit quidem deserunt adipisci! Cupiditate quos minima cumque placeat dolorum doloribus quibusdam pariatur. A optio quae veritatis amet nobis molestiae.</div>
            <div>Neque vero beatae odio hic, voluptatem eveniet velit placeat molestiae delectus praesentium! Quisquam esse temporibus similique labore veritatis? Beatae eveniet doloribus repellat ea maxime impedit iste accusantium alias earum perferendis.</div>
            <div>Ea, mollitia? Impedit soluta maiores saepe ipsa ea. Consequatur ducimus repudiandae delectus. Explicabo assumenda quidem animi veritatis ut et, at nam numquam quae quisquam temporibus minus atque pariatur nisi consequatur?</div>
            <div>Repudiandae itaque maiores perferendis! Quibusdam, quas numquam, enim asperiores eveniet eos ratione maxime nostrum obcaecati neque eligendi dolore. Quo repellendus dolor possimus accusantium est, sapiente dicta laboriosam tempore facere cumque!</div>
        </Fragment>
    );
}