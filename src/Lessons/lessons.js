import attack_targets from '../assets/attack_targets.png';
import phishing from '../assets/phishing.webp';
import malware from '../assets/malware.jpg';
import network_trapping from '../assets/network-trapping.jpeg';
import piracy from '../assets/piracy.webp';
import attack_cloud from '../assets/attack_in_the_cloud.jpg';

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
    },
    'network-trapping' : {
        title: 'Network Trapping',
        overview: `Network TAPs (Test Access Points) are hardware devices inserted between network
                    connections to passively copy traffic for monitoring, security, and analysis purposes. Unlike
                    SPAN ports, TAPs provide complete, unaltered data capture without impacting network
                    performance. They are foundational for achieving full network visibility.
                `,
        content: [
            { heading: `TAPs vs SPAN Ports`, text: `TAPs vs. SPAN Ports
                                    ● TAPs: Offer 100% traffic capture, including errors, without introducing latency or altering
                                    data.
                                    ● SPAN Ports: May drop packets under high load, can miss errors, and might affect
                                    network performance.
                                    Therefore, TAPs are generally preferred for critical monitoring needs.
                                    ` },
            { heading: 'Best Practices for Deploying TAPs', text: `1. Deploy TAPs Universally: Implement TAPs across all critical network links to ensurecomprehensive visibility.
                                                        2. Integrate TAPs During Initial Setup: Incorporate TAPs during network design to avoid future disruptions.
                                                        3. Prefer TAPs Over SPAN Ports: Use TAPs where possible; reserve SPAN ports for less critical areas.
                                                        4. Choose Between Passive and Active Based on Use Case: Select the appropriate TAP type considering power availability and network complexity.` }
        ],
        image: network_trapping
    },
    'wireless-network-pirating' : {
        title: 'Wireless Network Pirating',
        overview: `Wireless networks have become integral to daily life, but their convenience comes with security
                    challenges. The article emphasizes the importance of understanding and mitigating
                    vulnerabilities to protect against unauthorized access and data breaches.
                `,
        content: [
            { heading: `Key Vulnerabilites in Wireless Networks`, text: `1. Weak Encryption Protocols: Outdated encryption methods like WEP and early versions of WPA are susceptible to attacks, allowing hackers to intercept and decipher network traffic.
                                                            2. Default or Weak Passwords: Using factory-set or easily guessable passwords provides an easy entry point for attackers to access network resources.
                                                            3. Misconfigured Access Points: Improperly set up routers or access points, such as those with open ports or unnecessary services enabled, can create exploitable securitygaps.
                                                            4. Rogue Access Points: Attackers may set up unauthorized access points that mimic legitimate networks, tricking users into connecting and exposing their data.` },
            { heading: 'Importance of Awareness and Proactive Measures', text: `The article underscores that recognizing these vulnerabilities is the first step toward securing wireless networks. Implementing strong security measures, such as updating encryption protocols, using robust passwords, properly configuring network devices, and monitoring for unauthorized access points, is crucial. Regular vulnerability assessments and staying informed about emerging threats are also recommended to maintain network integrity.` }
        ],
        image: piracy
    },
    'attack-in-the-cloud' : {
        title: 'Attack in the Cloud',
        overview: `As organizations increasingly adopt cloud technologies, understanding and mitigating
                    cloud-specific security threats becomes paramount. The article outlines prevalent attack types
                    and offers best practices to bolster cloud security
                `,
        content: [
            { heading: `Common Cloud Security Threats`, text: `● Misconfigurations: Incorrect settings in cloud environments can expose sensitive data or systems to unauthorized access.
                                                            ● Insecure APIs: Poorly secured application programming interfaces can be exploited to gain unauthorized access or manipulate services.
                                                            ● Account Hijacking: Attackers may compromise user credentials to gain control over cloud accounts, leading to data breaches or service disruptions.
                                                            ● Insider Threats: Malicious or negligent actions by employees or contractors can lead to significant security incidents.
                                                            ● Denial of Service (DoS) Attacks: Overwhelming cloud services with traffic to render them unavailable to legitimate users.
            `},                 
            { heading: `Best Practices for Cloud Security`, text: `● Implement Strong Access Controls: Utilize multi-factor authentication and role-based access to limit exposure.
                                                            ● Regularly Audit and Monitor: Continuously assess cloud configurations and monitor for unusual activities.
                                                            ● Secure APIs: Ensure APIs are authenticated, encrypted, and regularly tested for vulnerabilities.
                                                            ● Educate and Train Staff: Promote security awareness to mitigate insider threats.
                                                            ● Develop Incident Response Plans: Prepare for potential breaches with well-defined response strategies.
            `}                 
        ],
        image: attack_cloud
    }
};

export default lessons;