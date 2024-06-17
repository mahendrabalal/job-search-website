import './Services.css';
import { useContext } from 'react';
import ThemeContext from '../context/theme.context';

function Services() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`services-container ${theme}`}>
            <h1>Our Services</h1>
            <br></br>
            <p>Welcome to <strong>CareerBuilder</strong>, where your career journey begins! We are committed to providing you with comprehensive, user-friendly, and effective services to help you find your dream job. Explore our wide range of services designed to cater to job seekers at every stage of their career.</p>
           <br></br>
            <div className={`service ${theme}`}>
                <h2 className={`h2 ${theme}`}>1. Job Listings</h2>
                <p><strong>Discover thousands of job opportunities</strong> across various industries, locations, and experience levels. Our extensive database is updated daily, ensuring you have access to the latest job postings.</p>
                <ul>
                    <li><strong>Industry-specific Listings:</strong> Tailored job openings in your preferred field.</li>
                    <li><strong>Location-based Search:</strong> Find jobs close to home or in your dream city.</li>
                    <li><strong>Experience Level Filters:</strong> From internships to executive positions.</li>
                </ul>
            </div>

            <div className={`service ${theme}`}>
                <h2>2. Career Advice</h2>
                <p>Access a wealth of resources through our <strong>Career Advice</strong> section. Whether you’re just starting out or looking to advance, we offer guidance to help you succeed.</p>
                <ul>
                    <li><strong>Expert Articles:</strong> Insights from industry professionals.</li>
                    <li><strong>Interview Tips:</strong> Prepare for your next interview with confidence.</li>
                    <li><strong>Career Development:</strong> Strategies for career growth and advancement.</li>
                </ul>
            </div>

            <div className={`service ${theme}`}>
                <h2>3. Job Alerts</h2>
                <p>Never miss an opportunity with our <strong>Job Alerts</strong> service. Set up personalized alerts to receive notifications about new job postings that match your criteria.</p>
                <ul>
                    <li><strong>Customized Notifications:</strong> Based on your chosen industry, location, and keywords.</li>
                    <li><strong>Real-time Updates:</strong> Instant email notifications for new listings.</li>
                    <li><strong>Easy Management:</strong> Modify or cancel alerts anytime.</li>
                </ul>
            </div>

            <div className={`service ${theme}`}>
                <h2>4. Company Profiles</h2>
                <p>Research potential employers with our detailed <strong>Company Profiles</strong>. Gain insights into company culture, values, and benefits to find the right fit for you.</p>
                <ul>
                    <li><strong>In-depth Information:</strong> Company history, mission, and vision.</li>
                    <li><strong>Employee Reviews:</strong> Read firsthand accounts from current and former employees.</li>
                    <li><strong>Job Listings:</strong> View current openings and application details.</li>
                </ul>
            </div>

            <div className={`service ${theme}`}>
                <h2>5. Networking Opportunities</h2>
                <p>Expand your professional network with our <strong>Networking Opportunities</strong>. Connect with industry professionals, attend virtual events, and join relevant groups.</p>
                <ul>
                    <li><strong>Professional Connections:</strong> Link with peers, mentors, and leaders in your field.</li>
                    <li><strong>Events & Webinars:</strong> Participate in online events to learn and network.</li>
                    <li><strong>Industry Groups:</strong> Join discussions and share insights with like-minded professionals.</li>
                </ul>
            </div>

            <div className={`service ${theme}`}>
                <h2>6. Application Tracking</h2>
                <p>Stay organized with our <strong>Application Tracking</strong> feature. Manage and monitor your job applications all in one place.</p>
                <ul>
                    <li><strong>Track Progress:</strong> Keep tabs on the status of your applications.</li>
                    <li><strong>Reminders & Follow-ups:</strong> Set reminders for follow-up actions.</li>
                    <li><strong>Document Storage:</strong> Save cover letters, resumes, and other documents.</li>
                </ul>
            </div>

            <p>At <strong>CareerBuilder</strong>, we are dedicated to supporting you every step of the way. Start exploring our services today and take the first step towards your next career opportunity!</p>
        </div>
    );
}

export default Services;
