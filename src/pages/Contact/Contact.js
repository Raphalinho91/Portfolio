import { Container, TextField, Button, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import * as style from "./style";
import axios from "axios";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_fdrcxnu";
    const templateId = "template_64evyay";
    const publicKey = "kmt4PQq7aSKfolanD";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_nom: nom,
        from_prenom: prenom,
        from_email: email,
        to_name: "Raphael",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setNom("");
      setPrenom("");
      setEmail("");
      setNumero("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <style.boxProfile id="contact">
      <Container>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: "#F6D6EE",
            textShadow: `0 0 1px #C9379D, 0 0 1px #C9379D`,
          }}
          gutterBottom
        >
          Contactez-nous
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nom"
                variant="outlined"
                sx={{
                  input: {
                    color: "#F6D6EE",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#F6D6EE",
                    },
                    "&:hover fieldset": {
                      borderColor: "#F6D6EE",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#F6D6EE",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#F6D6EE",
                    "&.Mui-focused": {
                      color: "#F6D6EE",
                    },
                  },
                }}
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                sx={{
                  input: {
                    color: "#F6D6EE",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#F6D6EE",
                    },
                    "&:hover fieldset": {
                      borderColor: "#F6D6EE",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#F6D6EE",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#F6D6EE",
                    "&.Mui-focused": {
                      color: "#F6D6EE",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Sujet"
                variant="outlined"
                fullWidth
                required
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                sx={{
                  input: {
                    color: "#F6D6EE",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#F6D6EE",
                    },
                    "&:hover fieldset": {
                      borderColor: "#F6D6EE",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#F6D6EE",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#F6D6EE",
                    "&.Mui-focused": {
                      color: "#F6D6EE",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  input: {
                    color: "#F6D6EE",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#F6D6EE",
                    },
                    "&:hover fieldset": {
                      borderColor: "#F6D6EE",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#F6D6EE",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#F6D6EE",
                    "&.Mui-focused": {
                      color: "#F6D6EE",
                    },
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#F6D6EE",
                  color: "#C9379D",
                  width: "140px",
                  "&:hover": {
                    backgroundColor: "#F6D6EE",
                    color: "#C9379D",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#F6D6EE",
                    textShadow: `0 0 1px #C9379D, 0 0 1px #C9379D`,
                    fontSize: "12px",
                  }}
                >
                  Envoyer
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </style.boxProfile>
  );
};

export default Contact;
