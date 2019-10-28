import React from 'react';
import classes from '../functions/classes';
import * as styles from './TeamContent.module.css';
import './TeamContent.module.css';

var userData = [
    {userId:'ID100',name:'Anand S',addr1:'58, cuddalore main road,',addr2:'Pudupet post, Attur,',district:'Salem',pincode:'636141',number:'7418853538'},
    {userId:'ID101',name:'Manimozhidevi S',addr1:'9/2, Subramniyapuram,',addr2:'7th street, South extension,',district:'Karaikkudi',pincode:'630002',number:'9442040593'},
    {userId:'ID102',name:'Praveenkumar S',addr1:'S-3, block 1, Preetha manor,',addr2:'Somasundaram street, Medavakkam,',district:'Chennai',pincode:'600100',number:'6383586317'},
    {userId:'ID103',name:'Rameshkumar G',addr1:'5/25, O.Jedarpalayam,',addr2:'Rasipuram,',district:'Namakkal',pincode:'637406',number:'7845181074'},
    {userId:'ID104',name:'Revathi M',addr1:'No.1, Sumangali nagar,',addr2:'Kayarambedu, Guduvanchery,',district:'Chennai',pincode:'603202',number:'9659471936'},
    {userId:'ID105',name:'Siva sankari P',addr1:'24/1, Parvathipuram,',addr2:'Antharapatti road, Musiri,',district:'Trichy',pincode:'621211',number:'9043976936'},
    {userId:'ID106',name:'Syed riyas M',addr1:'15-A, Al-Ameen colony,',addr2:'3rd street, South ukkadam,',district:'Coimbatore',pincode:'641001',number:'9698822186'},
    {userId:'ID107',name:'Venoth S',addr1:'6/269, keela algapuri,',addr2:'Mappillaiyurani,',district:'Thoothukudi',pincode:'628002',number:'9965180899'},
]

class TeamContent extends React.Component {
    createList = (user) => {
        var userId = user.userId;
        var isUserImg = styles[userId] ? true : false;
        return (
            <li className={styles.profileList}>
                <figure className={classes([styles.profileImage,isUserImg ? styles[userId] : styles.profileCharacterImage])}>
                    {isUserImg ? null : user.name.charAt(0)}
                </figure>
                <figcaption className={styles.profileCaption}>
                    <h3>
                        {user.name}
                    </h3>
                    <h4>
                        {user.addr1}
                        <br></br>
                        {user.addr2}
                        <br></br>
                        {user.district} - {user.pincode}
                        <br></br>
                        Phn.No:- {user.number}.
                        <br></br>
                    </h4>
                </figcaption>
            </li>
        )
    }
    render() {
        return (
            <div className={classes([styles.mainContent,styles.mainContentWidth])}>
                <div>
                    <header>
                        <h2 className={styles.mainTitle}>Our Team</h2>
                    </header>
                    <ul className={styles.profile}>
                        {
                            userData.map((user)=>{
                                return (this.createList(user))
                            })
                        }
                    </ul>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default TeamContent;