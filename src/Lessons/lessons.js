import attack_targets from '../assets/attack_targets.png';
import phishing from '../assets/phishing.webp';
import malware from '../assets/malware.jpg';

const lessons = {
    'attack-targets' : {
        title: 'Attack Targets',
        overview: 'Attack targets are the specific entities, systems, or data that malicious actors aim to compromise. These can range from individual devices to entire organizational networks and critical infrastructure.',
        content: [
            { heading: 'Common Attack Targets', text: `- Individual users: Personal data, financial information, credentials
                                                        - Businesses: Customer databases, intellectual property, financial systems
                                                        - Critical infrastructure: Power grids, water systems, transportation networks
                                                        - Government agencies: Classified information, citizen data, defense systems
                                                        - Healthcare organizations: Patient records, medical devices, research data` },
            { heading: 'Protection Strategies', text: `- Implement the principle of least privilege (users only have access to what they need)
                                                        - Conduct regular asset inventories to understand what needs protection
                                                        - Use network segmentation to isolate critical systems
                                                        - Deploy intrusion detection/prevention systems
                                                        - Perform regular risk assessments to identify vulnerable assets
                                                        - Establish security monitoring for unusual activities` },
        ],
        image: attack_targets
    },
    'phishing' : {
        title: 'Phishing Attacks',
        overview: 'Phishing attacks use deceptive communications that appear to come from trusted sources to trick recipients into revealing sensitive information or installing malware.',
        content: [
            { heading: `How They're Used`, text: `- Email phishing: Mass-sending deceptive emails requesting urgent action
                                                    - Spear phishing: Targeted attacks customized for specific individuals
                                                    - Smishing: SMS-based phishing attempts
                                                    - Vishing: Voice call phishing that manipulates victims through conversation
                                                    - Business Email Compromise (BEC): Impersonating executives to authorize payments
                                                    - Clone phishing: Duplicating legitimate communications with malicious content` },
            { heading: 'Protection Strategies', text: `- Verify sender identity before responding to requests
                                                        - Hover over links to preview URLs before clicking
                                                        - Look for poor grammar, spelling errors, and generic greetings
                                                        - Never share sensitive information in response to unsolicited requests
                                                        - Use email filtering and anti-phishing tools
                                                        - Enable multi-factor authentication on all accounts
                                                        - Participate in security awareness training regularly
                                                        - Verify requests for sensitive information or financial transactions through separate channels
                                                        - Report suspicious communications to IT security` }
        ],
        image: phishing
    },
    'malware-infections' : {
        title: 'Malware Infection',
        overview: 'Malware (malicious software) is designed to damage, disrupt, or gain unauthorized access to computer systems. It can spread through various methods and has diverse capabilities.',
        content: [
            { heading: `How It's Used`, text: `- Ransomware: Encrypts data and demands payment for decryption keys
                                                - Trojans: Disguised as legitimate software to gain system access
                                                - Spyware: Secretly monitors user activity and collects information
                                                - Worms: Self-replicating malware that spreads across networks
                                                - Keyloggers: Records keystrokes to capture passwords and sensitive data
                                                - Crypto-miners: Uses system resources to mine cryptocurrency
                                                - Rootkits: Provides persistent privileged access while hiding their presence
                                                - Botnets: Networks of infected computers controlled remotely` },
            { heading: 'Protection Strategies', text: `- Keep all software and operating systems updated with security patches
                                                        - Use reputable antivirus and anti-malware software with real-time protection
                                                        - Enable firewall protection on networks and devices
                                                        - Practice caution when downloading files or clicking on links
                                                        - Avoid suspicious websites and unofficial app sources
                                                        - Regularly scan devices for malware
                                                        - Back up important data following the 3-2-1 rule (3 copies, 2 different media types, 1 offsite)
                                                        - Use application whitelisting in organizational environments
                                                        - Disable autorun features for removable media
                                                        - Implement email attachment scanning
                                                        - Consider using virtualization or sandboxing for testing unknown software` }
        ],
        image: malware
    }
};

export default lessons;