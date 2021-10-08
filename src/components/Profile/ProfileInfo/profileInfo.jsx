import profileInfo_classes from './profileInfo.module.css'
import icon from './icons.module.css'
import Loading from '../../common/loading/loading'
let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loading />
    }

    return (
        <div>
            <div className={profileInfo_classes.main_img}><img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="###" /></div>
            <div className={profileInfo_classes.description}>
                <div className={profileInfo_classes.avatar}>
                    <a target="_blank" href={props.profile.photos.large}><img src={props.profile.photos.small} /></a>
                </div>
                <div className={profileInfo_classes.info}>
                    <div className={profileInfo_classes.fullName}>{props.profile.fullName}</div>
                    <div className={profileInfo_classes.about}>{props.profile.aboutMe}</div>
                    <div className={profileInfo_classes.job}>
                        {props.profile.lookingForAJob ? <span>I need a job: </span> : <p>I don't need a job</p>}
                        {props.profile.lookingForAJobDescription}
                    </div>
                    <div className={profileInfo_classes.contacts}>
                        <div className={profileInfo_classes.contactsItem}>
                            <a target='_blank' href={props.profile.contacts.facebook} >
                                <span className={icon.icoFacebook}></span>
                            </a>
                        </div>
                        <div className={profileInfo_classes.contactsItem}>
                            <a target='_blank' href={props.profile.contacts.website} >
                                <span className={icon.icoWww}></span>
                            </a>
                        </div>
                        <div className={profileInfo_classes.contactsItem}>
                            <a target='_blank' href={props.profile.contacts.vk} >
                                <span className={icon.icoVk}></span>
                            </a>
                        </div>
                        <div className={profileInfo_classes.contactsItem}>
                            <a target='_blank' href={props.profile.contacts.twitter} >
                                <span className={icon.icoTwitter}></span>
                            </a>
                        </div>
                        <div className={profileInfo_classes.contactsItem}>
                            <a target='_blank' href={props.profile.contacts.instagram} >
                                <span className={icon.icoInstagram}></span>
                            </a>
                        </div>
                        <div className={profileInfo_classes.contactsItem}>
                            <a target='_blank' href={props.profile.contacts.youtube} >
                                <span className={icon.icoYoutube}></span>
                            </a>
                        </div>
                        <div className={profileInfo_classes.contactsItem}>
                            <a target='_blank' href={props.profile.contacts.github} >
                                <span className={icon.icoGithub}></span>
                            </a>
                        </div>
                        <div className={profileInfo_classes.contactsItem}>
                            <a target='_blank' href={props.profile.contacts.mainLink} >
                                <i className={icon.icoMainLink}></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ProfileInfo