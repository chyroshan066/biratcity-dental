import { IonIcon } from '@/components/utility/IonIcon';
import Link from 'next/link';
import React, { memo } from 'react';

const TRAININGS: string[] = [
    "Dental Implants",
    "Post & Core Procedures",
];

export const Dentist = memo(() => {
    return (
        <main>
            {/* Hero Section*/}
            <section style={{
                background: 'linear-gradient(135deg, var(--forest-green-1) 0%, var(--mint-green) 100%)',
                paddingTop: '30px',
                paddingBottom: '5px',
                marginTop: '95px'
            }}>
                <div className="custom-container">
                    <div className="hero-content text-center">
                        <h1 className="headline-1">Meet Our Expert</h1>
                        <p className="hero-text">
                            Providing exceptional dental care with years of experience and specialized training
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Dentist Profile Section */}
            <section style={{
                paddingTop: '80px',
                paddingBottom: '80px'
            }}>
                <div className="custom-container">
                    <div className="dentist-profile-grid">

                        {/* Profile Card */}
                        <div
                            className="dentist-card"
                            style={{
                                background: 'linear-gradient(145deg, #ffffff 0%, #f8fffe 100%)',
                                border: '1px solid rgba(150, 211, 169, 0.2)',
                                borderRadius: '20px',
                                padding: '60px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                            {/* Decorative background element */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                background: 'linear-gradient(135deg, var(--mint-green), var(--emerald-green))',
                                borderRadius: '50%',
                                opacity: '0.1',
                                zIndex: '1'
                            }}></div>

                            {/* Profile Image */}
                            <div
                                className="dentist-image-wrapper"
                                style={{
                                    position: 'relative',
                                    zIndex: '2'
                                }}>
                                <div
                                    className="img-holder dentist-img-holder"
                                    style={{
                                        "--width": 220,
                                        "--height": 220,
                                        border: '6px solid var(--mint-green)',
                                        borderRadius: '50%',
                                        padding: '8px',
                                        background: 'white',
                                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                                        position: 'relative'
                                    } as React.CSSProperties}>
                                    <img
                                        src="/images/media/images/g3.webp"
                                        alt="Dr. Ambika Sah - Dental Surgeon"
                                        className="img-cover dentist-profile-img"
                                        loading="lazy"
                                        style={{ borderRadius: '50%' }}
                                    />

                                    {/* Verified badge */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        right: '10px',
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--emerald-green)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '18px',
                                        border: '3px solid white',
                                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                                    }}>
                                        ✓
                                    </div>

                                </div>
                            </div>

                            <div style={{
                                position: 'relative',
                                zIndex: '2'
                            }}>
                                <h2
                                    className="h25 dentist-name"
                                    style={{
                                        marginTop: '30px',
                                        color: 'var(--forest-green-1)'
                                    }}>
                                    Dr. Ambika Sah
                                </h2>
                                <h3
                                    className="dentist-title"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--mint-green), var(--emerald-green))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontSize: '1.8rem',
                                        fontWeight: '700',
                                        marginBottom: '25px'
                                    }}>
                                    Dental Surgeon
                                </h3>

                                <div
                                    className="dentist-qualification-badge"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--mint-web), #e8f5f0)',
                                        border: '2px solid var(--mint-green)',
                                        borderRadius: '15px',
                                        padding: '20px 30px',
                                        marginBottom: '25px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                                    }}>
                                    <p style={{
                                        color: 'var(--forest-green-2)',
                                        fontWeight: '800',
                                        fontSize: '1.6rem',
                                        letterSpacing: '1px'
                                    }}>
                                        BDS (KU)
                                    </p>
                                </div>

                                <div
                                    className="dentist-institution-info"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--forest-green-2), var(--forest-green-1))',
                                        borderRadius: '15px',
                                        padding: '25px',
                                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                                        border: '1px solid var(--mint-green)'
                                    }}>
                                    <p
                                        className="institution-text"
                                        style={{
                                            fontSize: '1.4rem',
                                            fontWeight: '600',
                                            lineHeight: '1.6',
                                            margin: '0'
                                        }}>
                                        NOBEL MEDICAL COLLEGE & TEACHING HOSPITAL<br />
                                        <span style={{
                                            fontSize: '1.2rem',
                                            opacity: '0.9',
                                            fontWeight: '500',
                                            color: 'var(--light-steel-green)'
                                        }}>
                                            NMC No: 34407
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div style={{
                            textAlign: 'left',
                            padding: '40px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(150, 211, 169, 0.1)'
                        }}>
                            <h3
                                className="section-subtitle"
                                style={{
                                    color: 'var(--emerald-green)',
                                    fontSize: '1.4rem',
                                    letterSpacing: '2px',
                                    marginBottom: '15px'
                                }}>
                                ABOUT
                            </h3>
                            <h2 style={{
                                color: 'var(--forest-green-1)',
                                fontSize: '2.8rem',
                                fontWeight: '700',
                                marginBottom: '30px',
                                lineHeight: '1.2'
                            }}>
                                Dedicated to Your Oral Health
                            </h2>
                            <p
                                className="section-text dentist-about-text"
                                style={{
                                    fontSize: '1.6rem',
                                    lineHeight: '1.8',
                                    color: 'var(--sonic-silver)',
                                    marginBottom: '30px'
                                }}>
                                Dr. Ambika Sah is a highly qualified dental surgeon with a Bachelor of Dental Surgery (BDS)
                                degree from Kathmandu University. She is registered with the Nepal Medical Council and brings
                                extensive experience in comprehensive dental care.
                            </p>
                            <p
                                className="section-text dentist-about-text"
                                style={{
                                    fontSize: '1.6rem',
                                    lineHeight: '1.8',
                                    color: 'var(--sonic-silver)'
                                }}>
                                Dr. Sah is committed to providing the highest quality dental treatments with a focus on
                                patient comfort and satisfaction, utilizing the latest techniques and technologies in modern dentistry.
                            </p>

                            {/* Key highlights */}
                            <div style={{ marginTop: '40px' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    marginBottom: '15px',
                                    padding: '15px',
                                    background: 'rgba(150, 211, 169, 0.1)',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(150, 211, 169, 0.2)'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--emerald-green)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '18px',
                                        flexShrink: '0'
                                    }}>
                                        🎓
                                    </div>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        color: 'var(--forest-green-1)',
                                        fontWeight: '600'
                                    }}>
                                        KU Graduate & NMC Registered
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    padding: '15px',
                                    background: 'rgba(150, 211, 169, 0.1)',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(150, 211, 169, 0.2)'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--emerald-green)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '18px',
                                        flexShrink: '0'
                                    }}>
                                        💚
                                    </div>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        color: 'var(--forest-green-1)',
                                        fontWeight: '600'
                                    }}>
                                        Patient-Centered Care Approach
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training & Expertise Section */}
            <section style={{
                background: 'linear-gradient(135deg, var(--forest-green-3) 0%, var(--forest-green-2) 100%)',
                padding: '100px 0',
                position: 'relative',
                overflow: 'hidden'
            }}>

                <div
                    className="custom-container"
                    style={{
                        position: 'relative',
                        zIndex: '2'
                    }}>
                    <div
                        className="text-center"
                        style={{ marginBottom: '80px' }}>
                        <h3
                            className="section-subtitle"
                            style={{
                                color: 'var(--mint-green)',
                                fontSize: '1.4rem',
                                letterSpacing: '2px',
                                marginBottom: '15px'
                            }}>
                            SPECIALIZED TRAINING
                        </h3>
                        <h2
                            className="h2"
                            style={{
                                color: 'white',
                                fontSize: '3.2rem',
                                fontWeight: '700',
                                marginBottom: '25px'
                            }}>
                            Advanced Dental Expertise
                        </h2>
                        <p style={{
                            color: 'var(--light-steel-green)',
                            fontSize: '1.6rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Dr. Sah has completed specialized training in various advanced dental procedures
                            and actively participates in community health initiatives.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '40px'
                    }}>

                        {/* Training Card */}
                        <div className="training-card" style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            padding: '50px',
                            borderRadius: '20px',
                            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(150, 211, 169, 0.3)',
                            backdropFilter: 'blur(10px)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>

                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                right: '0',
                                height: '6px',
                                background: 'linear-gradient(90deg, var(--mint-green), var(--emerald-green))'
                            }} />

                            <div style={{
                                width: '90px',
                                height: '90px',
                                background: 'linear-gradient(135deg, var(--mint-green), var(--emerald-green))',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 30px',
                                fontSize: '36px',
                                color: 'white',
                                boxShadow: '0 15px 40px rgba(150, 211, 169, 0.4)',
                                position: 'relative'
                            }}>
                                <IonIcon name="school-outline" />

                                {/* Pulse animation ring */}
                                <div style={{
                                    position: 'absolute',
                                    width: '110px',
                                    height: '110px',
                                    border: '2px solid var(--mint-green)',
                                    borderRadius: '50%',
                                    opacity: '0.3',
                                    animation: 'pulse 2s infinite'
                                }} />
                            </div>

                            <h4 className="training-card-title" style={{
                                color: 'var(--forest-green-1)',
                                fontSize: '2.2rem',
                                fontWeight: '700',
                                marginBottom: '25px'
                            }}>
                                Training Completed
                            </h4>

                            <ul style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: '0',
                                textAlign: 'left'
                            }}>

                                {TRAININGS.map((training, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '18px',
                                            fontSize: '1.6rem',
                                            color: 'var(--sonic-silver)',
                                            padding: '12px',
                                            background: 'rgba(150, 211, 169, 0.08)',
                                            borderRadius: '10px',
                                            border: '1px solid rgba(150, 211, 169, 0.2)'
                                        }}>
                                        <span style={{
                                            width: '12px',
                                            height: '12px',
                                            background: 'var(--emerald-green)',
                                            borderRadius: '50%',
                                            marginRight: '18px',
                                            flexShrink: '0'
                                        }} />
                                        {training}
                                    </li>
                                ))}

                                <li className="training-item" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '1.6rem',
                                    color: 'var(--sonic-silver)',
                                    padding: '12px',
                                    background: 'rgba(150, 211, 169, 0.08)',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(150, 211, 169, 0.2)'
                                }}>
                                    <span style={{
                                        width: '12px',
                                        height: '12px',
                                        background: 'var(--emerald-green)',
                                        borderRadius: '50%',
                                        marginRight: '18px',
                                        flexShrink: '0'
                                    }}></span>
                                    Lasers in Dentistry
                                </li>
                            </ul>
                        </div>

                        {/* Community Service Card */}
                        <div className="training-card" style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            padding: '50px',
                            borderRadius: '20px',
                            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(150, 211, 169, 0.3)',
                            backdropFilter: 'blur(10px)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                right: '0',
                                height: '6px',
                                background: 'linear-gradient(90deg, var(--mint-green), var(--emerald-green))'
                            }} />

                            <div style={{
                                width: '90px',
                                height: '90px',
                                background: 'linear-gradient(135deg, var(--mint-green), var(--emerald-green))',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 30px',
                                fontSize: '36px',
                                color: 'white',
                                boxShadow: '0 15px 40px rgba(150, 211, 169, 0.4)',
                                position: 'relative'
                            }}>
                                <IonIcon name="medical-outline" />
                                {/* Pulse animation ring */}
                                <div style={{
                                    position: 'absolute',
                                    width: '110px',
                                    height: '110px',
                                    border: '2px solid var(--mint-green)',
                                    borderRadius: '50%',
                                    opacity: '0.3',
                                    animation: 'pulse 2s infinite'
                                }}></div>
                            </div>

                            <h4 className="training-card-title" style={{
                                color: 'var(--forest-green-1)',
                                fontSize: '2.2rem',
                                fontWeight: '700',
                                marginBottom: '25px'
                            }}>
                                Community Service
                            </h4>

                            <div style={{
                                padding: '25px',
                                background: 'rgba(150, 211, 169, 0.08)',
                                borderRadius: '15px',
                                border: '1px solid rgba(150, 211, 169, 0.2)',
                                textAlign: 'left'
                            }}>
                                <p className="community-service-text" style={{
                                    fontSize: '1.6rem',
                                    color: 'var(--sonic-silver)',
                                    lineHeight: '1.7',
                                    margin: '0'
                                }}>
                                    Actively participates in various health camps, providing essential dental care
                                    to underserved communities and promoting oral health awareness throughout Nepal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section
                className="section dentist-cta"
                style={{
                    padding: '100px 0',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 255, 254, 0.9) 100%)',
                    position: 'relative'
                }}>
                <div className="custom-container text-center">
                    <h3
                        className="section-subtitle"
                        style={{
                            color: 'var(--emerald-green)',
                            fontSize: '1.4rem',
                            letterSpacing: '2px',
                            marginBottom: '15px'
                        }}>
                        READY TO GET STARTED?
                    </h3>
                    <h2
                        className="h2"
                        style={{
                            color: 'var(--forest-green-1)',
                            fontSize: '3.2rem',
                            fontWeight: '700',
                            marginBottom: '25px'
                        }}>
                        Schedule Your Appointment Today
                    </h2>
                    <p
                        className="section-text"
                        style={{
                            fontSize: '1.6rem',
                            color: 'var(--sonic-silver)',
                            maxWidth: '700px',
                            margin: '0 auto 50px',
                            lineHeight: '1.7'
                        }}>
                        Experience professional dental care with Dr. Ambika Sah. Book your consultation
                        and take the first step towards optimal oral health.
                    </p>
                    <Link
                        href="/#contact"
                        className="btn"
                        style={{
                            display: 'inline-block',
                            padding: '20px 40px',
                            fontSize: '1.6rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            borderRadius: '50px',
                            boxShadow: '0 15px 40px rgba(150, 211, 169, 0.4)',
                            transition: 'all 0.3s ease',
                            border: '2px solid transparent'
                        }}>
                        Book Appointment
                    </Link>
                </div>
            </section>
        </main>
    );
});

Dentist.displayName = "Dentist";