const styles = {
    div: {
        background: "#FFBE28",
    },
    title: {
        fontSize: "30px"
    },
    spacer: {
        display: 'block',
        padding: '20px',
        height: '150px',
        width: '100%',
    }
};

function Footer() {
    return(
      <footer>
        <div style={styles.spacer}></div>
        <section style={styles.div} className="p-2">  
          <div className="d-flex justify-content-between">
            <h1 className="ps-4" style={styles.title}>myShelf © 2023</h1>
            <a className="pe-4" href="https://github.com/abbyjo/my-shelf" target="_blank" rel="noopener noreferrer"> <h1 style={styles.title}>GitHub</h1> </a>
          </div>  
        </section>
      </footer>
    )
};


export default Footer;