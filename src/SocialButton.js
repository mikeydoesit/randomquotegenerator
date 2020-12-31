import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = (props) => {
    return <a id={props.socialMediaId} href={props.sendURL} target="_blank">
        <FontAwesomeIcon icon={props.socialIcon} size="2x"/>
    </a>
}

export default SocialButton