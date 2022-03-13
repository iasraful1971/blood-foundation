import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// faq
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Navbar />

      <div className="faq__container">
        <div className="margin-container">
          <div className="main-faq">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>
                রক্ত দান করতে ব্যাথা লাগে কি?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                জ্বী না। রক্ত দানের সময় আপনি ব্যথা পাবেন না।


                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="my-5"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>
                  অধিকাংশ মানুষ মনে করে B+ve গরুর রক্ত, ইহা খুবই সহজ লভ্য, তাই
                  আমার তা না দিলেও চলবে, আসলে কি তাই???
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  পৃথিবীতে যত মেরুদন্ডী প্রাণী আছে তাদের সকলেরই রক্ত
                  সাদৃশ্যপূর্ণ। তবে রাসায়নিক গঠনের পার্থক্য থাকায় কোন প্রাণীর
                  রক্ত অন্য কোন প্রাণীরই অনুরূপ নয়। 
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>রক্ত দানের সঠিক বয়স কত?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ১৮ থেকে ৬০ বছরবয়সী সুস্থ সবল মানুষ রক্ত দিতে পারবে।
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
             className="my-5"
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography>রক্ত দান কি নিরাপদ ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  র রক্ত থাকে। উভয়ের ক্ষেত্রেই ৫০ মিলিলিটার রক্ত সংবহনের কাজে
                  লাগে, বাকিটা উদ্বৃত্ত থেকে যায়। 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "pane15"}
              onChange={handleChange("pane15")}
            >
              <AccordionSummary
                aria-controls="panel15d-content"
                id="panel15d-header"
              >
                <Typography>রক্ত দানের কি কোন সাইড এফেক্ট আছে ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>না রক্ত দানের কোন সাইড এফেক্ট নাই।</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
             className="my-5"
              expanded={expanded === "panel16"}
              onChange={handleChange("panel16")}
            >
              <AccordionSummary
                aria-controls="panel16d-content"
                id="panel16d-header"
              >
                <Typography> কতদিন পর পর রক্ত দান করা যায় ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ৩ মাস পর পর আপনি রক্ত দান করতে পারেন। তবে বিশ্ব স্বাস্থ্য
                  সংস্থার মত অনুযায়ী, একজনসুস্থ্য পুরুষ ৩ মাস ও নারী ৪ মাস অন্তর
                  রক্তদান করতে পারবেন।
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faq;
