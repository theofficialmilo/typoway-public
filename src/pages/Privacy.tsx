import { Box, Typography, Card, CardHeader, CardContent, List, ListItem, ListItemText } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundImage: `linear-gradient(#89cffa, #f5fbff);`,
    backgroundSize: 'cover',
  },
  card: {
    margin: 'auto',
    width: '70%',
    height: '60%',
  },
  cardContent: {
    height: 'calc(100% - 140px)',
    overflowY: 'auto'
  },
  div: {
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`
  },
  firstDiv: {
    padding: `0 ${theme.spacing(2)}px ${theme.spacing(4)}px`
  }
}))

const Privacy = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title={<Typography variant='h2' color='primary'>Privacy Policy</Typography>} subheader={<Typography color='secondary' variant='h6'>25th July, 2021</Typography>} />
        <CardContent className={classes.cardContent}>
          <div id='approact' className={classes.firstDiv}>
            <Typography color='primary' variant='h4'>Who we are?</Typography>
            <br />
            <Typography color='secondary' variant='body1'>This Privacy Policy applies to public.typoway.com</Typography>
            <br />
            <Typography color='secondary' variant='body1'>This Policy explains our practices regarding the collection, protection, use, sharing, and disclosure of information we collect when you visit our website.</Typography>
            <br />
            <Typography color='secondary' variant='body1'>For Google user data collected through Gmail APIs, see specific restrictions on our use of that data are set forth in the section titled Google User Data. You may access our Services from websites, phones, tablets, desktops, laptops and other devices. By your use of our Services, you consent to this Policy and our Terms of Service. This Policy also describes your choices regarding the sharing, use, access and correction of your personal information.</Typography>
            <br />
            <Typography color='secondary' variant='h6'>The service:</Typography>
            <Typography color='secondary' variant='body1'>Typoway is an web application that allows you to create HTML templates with ease and sends the email through the use of Gmail API.</Typography>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>Information We Collect</Typography>
            <br />
            <Typography color='secondary' variant='h6'>Information We Collect from the Services:</Typography>
            <Typography color='secondary' variant='body1'>Typoway accesses and processes email messages in any email accounts you have connected and data collected from other internet accounts you connect. By linking our Services to your email or other internet accounts, you authorize us to collect, process, and retain information, including personal information, from those accounts. We use this information to provide our Services to you.</Typography>
            <br />
            <Typography color='secondary' variant='body1'><b>Connected Internet Accounts.</b> You can connect your Internet accounts to Edison Mail in order for you to access select information from those accounts in Edison Mail. We access, store and use the information we collect from Connected Internet Accounts to provide our Services.</Typography>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>Information We Collect from Use of Services, and Visits to our Sites</Typography>
            <br />
            <Typography color='secondary' variant='body1'><b>Information we Collect from Your Communications with Us.</b> As is true of most websites and apps, we gather certain information automatically when you use our apps and visit our website. This information may include information on the type of device you use, operating system version and the device identifier (IDFA), internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, the files viewed on our site (e.g., HTML pages, graphics, etc.), operating system, date/time stamp, and/or clickstream data to analyze trends in the aggregate and administer the site.</Typography>
            <br />
            <Typography color='secondary' variant='body1'><b>Information we Collect from Cookies and other Tracking Technologies.</b> Typoway use cookies or similar technologies to analyze trends, administer our Services, track users’ interaction with our Services, and gather demographic information on our users. You can disable these cookies at any time, however, this may limit your use of certain features or functions. We do not use any cross-device data to track users. We do not respond to Do Not Track requests on our website. Advertising Other apps and services may use cookies or similar technologies to provide you advertising based upon your browsing activities and interests on other apps and services. We do not collect information for third party advertising purposes and we do not run ads on our Services.</Typography>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>How we use the information</Typography>
            <br />
            <Typography color='secondary' variant='body1'>We use, process, and store your information as necessary to perform the contract with you and for our legitimate business interests, including to:</Typography>
            <br />
            <Typography color='secondary' variant='body1'><b>Provide and Improve Services.</b> We use the information we collect to operate, maintain, provide, and personalize our Services and apps, and to research and develop new ones.</Typography>
            <br />
            <Typography color='secondary' variant='body1'><b>App Usage & Website Visitor Information.</b> We use automatically collected information for a variety of purposes, including to:</Typography>
            <List>
              <ListItem>
                <ListItemText><Typography color='secondary' variant='body1'>- remember information so that you will not have to re-enter it during your use of our Services;</Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText><Typography color='secondary' variant='body1'>- provide custom content, and information;</Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText><Typography color='secondary' variant='body1'>- fix technology problems reported by our users or engineers that are associated with certain IP addresses;</Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText><Typography color='secondary' variant='body1'>- automatically update the application on your system and related devices.</Typography></ListItemText>
              </ListItem>
            </List>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>How we share information</Typography>
            <br />
            <Typography color='secondary' variant='subtitle1'><b>We will always request your consent before sharing any of your information in a way not discussed in this Policy.</b></Typography>
            <br />
            <Typography color='secondary' variant='body1'>We take very seriously our responsibility to maintain the privacy of your personal information. As permitted, we make certain information and research available to our subscribers, service providers, partners, and other third parties. These third parties may include the following:</Typography>
            <br />
            <Typography color='secondary' variant='body1'><b>Legal Compliance.</b> In certain situations, Typoway may be required to disclose personal information in response to lawful requests by public authorities, including to meet national security or law enforcement. We may disclose to: (a) conform to the law, comply with legal process served on us or our affiliates, or investigate, prevent, or take action regarding suspected or actual illegal activities; (b) to enforce our Terms of Service, take precautions against liability, to investigate and defend ourselves against any third-party claims or allegations, to assist government enforcement agencies, or to protect the security or integrity of our site; and (c) to exercise or protect the rights, property, or personal safety of ourselves, our Services, customers, or others.</Typography>
            <br />
            <Typography color='secondary' variant='body1'><b>Please note:</b> Our policy is to notify you of legal process seeking access to your information, such as search warrants, court orders, or subpoenas, unless we are prohibited by law from doing so. In cases where a court order specifies a non-disclosure period, we provide delayed notice after the expiration of the non-disclosure period. Exceptions to our notice policy include exigent or counterproductive circumstances, for example, when there is an emergency involving a danger of death or serious physical injury to a person.</Typography>
            <br />
            <Typography color='secondary' variant='body1'><b>Corporate Change or Business Transfer.</b> We may also transfer or assign your information in the course of a corporate change or business transfer including, but not limited to, divestitures, mergers, or dissolution. We will continue to take measures to protect the confidentiality of personal information and give affected users notice before transferring any personal information to a new entity.</Typography>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>Your Choices to Manage Information</Typography>
            <br />
            <Typography color='secondary' variant='body1'><b>Revoke Access to Email Accounts.</b> Upon request, Typoway will provide you with information about whether we hold any of your personal information by contacting millenno.kho@gmail.com You may choose to disconnect your email account from our Services through revoking through Google Services. For steps on how to remove yourself from our Services please contact  millenno.kho@gmail.com.</Typography>
            <br />
            <Typography color='secondary' variant='body1'><b>Data Retention.</b> We may retain your information for as long as your account is active or as needed to provide our services, comply with our legal obligations, resolve disputes and enforce our agreements.</Typography>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>Security</Typography>
            <br />
            <Typography color='secondary' variant='body1'>It is your responsibility to keep your passwords private and secure. We strongly recommend against sharing your logins and passwords with others.</Typography>
            <br />
            <Typography color='secondary' variant='body1'>We take the protection of your information very seriously and employ measures through administrative, technical, and physical safeguards designed to protect information against loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We encrypt all data in transit and at rest. We take reasonable precautions to ensure the integrity and security of our network and systems, but cannot guarantee these security measures will prevent third parties from obtaining information by illegal actions or attacks.</Typography>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>How We Handle Minors’ Information</Typography>
            <br />
            <Typography color='secondary' variant='body1'>Our services are not intended for use by persons under the age of 16. If we become aware that a person under the age of 16 has opened an account or provided us with personal information, we will immediately delete the account and any such personal information.</Typography>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>Links to Other Sites</Typography>
            <br />
            <Typography color='secondary' variant='body1'>Our Services may contain links to other sites that are not under our control and have their own privacy policies. Please read over the rules and policies of third party sites before you proceed to use them. We are not responsible for the acts, omissions, or content linked on websites, and we provide these links solely for the convenience and information of our users.</Typography>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>Privacy Policy Updates</Typography>
            <br />
            <Typography color='secondary' variant='body1'>We may update this Policy from time to time, so you should review this Policy periodically. When we change the Policy, we will update the ‘last modified’ date at the top of this Policy. If we materially change our Policy, we will notify you of such changes by posting them on this page and/ or by a notification within our Services or via an email. Changes to this Policy are effective when they are posted on this page. Your continued use of our Services after the revised Policy has become effective indicates that you have read, understood, and agreed to the current version of this Policy.</Typography>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>Google User Data</Typography>
            <br />
            <Typography color='secondary' variant='body1'>Additional Limits on Use of Your Google User Data: Notwithstanding anything else in this Privacy Policy, consumer Gmail account information obtained via the <a href='https://support.google.com/cloud/answer/9110914#restricted-scopes' target={'__blank'}>Gmail APIs</a>, is subject to these additional restrictions:</Typography>
            <List>
              <ListItem>
                <ListItemText><Typography color='secondary' variant='body1'>- The Services may read, write, modify, delete or control Gmail message bodies (including attachments), metadata, headers, and settings to provide an email client that allows users to compose, send, read, delete and process emails and will not transfer this Gmail data to others unless doing so is necessary to provide and improve these features, comply with applicable law, or as part of a merger, acquisition, or sale of assets.</Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText><Typography color='secondary' variant='body1'>- The Services will not use this Gmail data for serving advertisements.</Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText><Typography color='secondary' variant='body1'>- The Services will not allow humans to read this data unless we have your afﬁrmative agreement for speciﬁc messages, doing so is necessary for security purposes such as investigating abuse, to comply with applicable law, or for the Services’ internal operations and even then only when the data have been aggregated and de-identified.</Typography></ListItemText>
              </ListItem>
            </List>
          </div>
          <div id='approact' className={classes.div}>
            <Typography color='primary' variant='h4'>Contact Us</Typography>
            <br />
            <Typography color='secondary' variant='body1'>If you have any questions about this Policy or our practices, please contact me at <a href="mailto:millenno.kgo@gmail.com">millenno.kho@gmail.com</a></Typography>
          </div>
        </CardContent>
      </Card>

    </Box>
  )
}

export default Privacy
