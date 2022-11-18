import Avatar from '../assets/Avatar.png';

import "../CSS/Profile.css";

function Profile(props) {
    return (

        <div style={{ marginTop: '-21%', marginBottom: '20%' }}>

            <div style={{ marginLeft: '25%', marginTop: '6%' }}>
                <img style={{ width: '7%', height: '10%', }} src={Avatar} alt="Surprised" />

                <div style={{ marginTop: '-8%', marginLeft: '-13%' }}>
                    <div style={{ marginLeft: '20%', marginBottom: '-3%' }}>
                        <p style={{ fontWeight: '600', fontSize: 22, color: '#4D4E50' }}>Profile</p>
                        <div style={{ marginTop: '-2%' }}>
                            <p style={{ fontSize: 13, color: '#515B6F' }}>olivia@untitledui.com</p>
                        </div>
                    </div>

                    <div style={{ width: '13%', display: 'flex', marginTop: '-7%', marginLeft: '80%' }}>
                        <div style={{ marginTop: 5 }}>
                            <button className='btn002'>Cancel</button>
                        </div>

                        <div style={{ marginTop: 5 }}>
                            <button className='btn003'>Save</button>
                        </div>
                    </div>


                </div>

                <div style={{ marginLeft: '-17%', marginTop: '4%' }}>

                    <form>
                        <div style={{ marginLeft: '15.2%', marginBottom: '-3%' }}>
                            <p style={{ fontWeight: '600', fontSize: 13, color: '#515B6F' }}>First name</p>
                        </div>
                        <input className="textInput02" type="text" name="name" placeholder='Olivia' />
                    </form>
                </div>

                <div style={{ marginLeft: '20%', marginTop: '-6.5%' }}>
                    <form>
                        <div style={{ marginLeft: '22%', marginBottom: '-4%' }}>
                            <p style={{ fontWeight: '600', fontSize: 13, color: '#515B6F' }}>Last name</p>
                        </div>
                        <input className="textInput02" type="text" name="name" placeholder='Rhye' />
                    </form>
                </div>

                <div className='line2'>

                </div>

                <div>
                    <div style={{ marginLeft: '1%', marginBottom: '-4%' }}>
                        <p style={{ fontWeight: '600', fontSize: 13, color: '#515B6F' }}>Email</p>
                    </div>
                    <form>
                        <div style={{ marginLeft: '8%', marginTop: '-5%' }}>
                            <input className="textInput02" type="text" name="name" placeholder='olivia@untitledui.com' />
                        </div>
                    </form>

                </div>

                <div className='line3'>

                </div>

                <div style={{ marginLeft: '1%', marginTop: '-2%' }}>
                    <h6 className='photo'>
                        Your Photo
                    </h6 >
                    <p className='photo2'> This will be displayed on your profile.</p>


                    <img style={{ width: '7%', marginLeft: '25%', marginTop: '-5%' }} src={Avatar} alt="Surprised" />


                </div>

                <div className='line3'>

                </div>

                <div style={{ marginLeft: '1%', marginTop: '-2%' }}>
                    <h6 className='photo'>Professional Headline</h6>

                    <form>
                        <div style={{ marginLeft: '8%', marginTop: '-5%' }}>
                            <input className="textInput02" type="text" name="name" placeholder='Product Designner' />

                        </div>

                    </form>
                    <h6 className='show'>Show my headline in my profile</h6>
                </div>

                <div className='line3' style={{ marginTop: '-2%' }}>

                </div>





                <div style={{ marginLeft: '1%', marginTop: '-2%' }}>
                    <h6 className='photo'>
                        Your bio
                    </h6 >
                    <p className='photo2'>Write a short introduction.</p>


                    <img style={{ width: '7%', marginLeft: '25%', marginTop: '-5%' }} src={Avatar} alt="Surprised" />


                </div>

                <div className='line3'>

                </div>


            </div>




        </div>
    );
}

export default Profile;