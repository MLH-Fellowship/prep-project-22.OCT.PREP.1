import "./Footer.css"

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="row">
                    <div className="col-l">
                    <span>
                            <h1>Web Whales Members</h1>
                            </span>
                        <p class="footer-company-about">
                            <table><tbody>
                            <tr>
                                <td className="columnSpace">Akanksha Kushwaha</td>
                                <td className="columnSpace" >Bhavneet Kaur</td>
                            </tr>
                            <tr>
                                <td className="columnSpace">Deepayan Mukherjee</td>
                                <td className="columnSpace">Devansu Yadav</td>
                            </tr>
                            <tr>
                                <td className="columnSpace">Divya Sri Darimisetti</td>
                                <td className="columnSpace">Gaurav Gulati</td>
                            </tr>
                            <tr>
                                <td className="columnSpace">Kanchi Tank</td>
                                <td className="columnSpace">Lavisha Bhambri</td>
                            </tr>
                            <tr>
                                <td className="columnSpace">Neelaksh Singh</td>
                                <td className="columnSpace">Moses Varghese</td>
                            </tr>
                            <tr>
                                <td className="columnSpace">Niyoj Oli</td>
                                <td className="columnSpace">Riffat Khan</td>
                            </tr>
                            <tr>
                                <td className="columnSpace">Siddhi Bhanushali</td>
                                <td className="columnSpace">Sudanshu Kumar</td>
                            </tr>
                            <tr>
                                <td className="columnSpace">Swatishree Mahapatra</td>
                            </tr>
                            </tbody></table>
                        </p>
                    </div>
                    <div className="col-r">
                        <h1>Our Portfolio</h1>
                        <ul>Check out detailed information about our Pod and its members in our <a href="https://prep-portfolio-22-oct-prep-1.netlify.app/" target="_blank" rel="noreferrer noopener">Portfolio site</a>!</ul>
                        <h1>Contribute!</h1>
                        <ul>Have an idea to improve this weather app? Contribute <a href="https://github.com/MLH-Fellowship/prep-project-22.OCT.PREP.1" target="_blank" rel="noreferrer noopener">here</a>!</ul>
                    </div>
                </div>
                <div className="footerEnd">
                    Web Whales, MLH Prep Fall © 2022
                </div>
            </footer>
        </>
    )

}

export default Footer