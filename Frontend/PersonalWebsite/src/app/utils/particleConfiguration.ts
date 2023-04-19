import { ClickMode, HoverMode, MoveDirection, OutMode } from "tsparticles-engine";
import { ThemingService } from "../services/theming.service";

export class ParticleConfiguration {
    particleOptionsArray: any[];

    constructor(private themeService: ThemingService) {
        this.themeService.initTheme();

        this.particleOptionsArray = [
            {
                fpsLimit: 120,
                fullScreen: {
                    enable: true,
                },
                themes: [
                    {
                        name: "dark",
                        default: {
                            value: (this.themeService.getColorTheme() == "dark-mode") ? true : false,
                        },
                        options: {
                            background: {
                                color: "rgb(40, 40,40)"
                            },
                            particles: {
                                color: {
                                    value: "#fff"
                                },
                                links: {
                                    color: {
                                        value: "#fff"
                                    }
                                }
                            },
                        },
                    },
                    {
                        name: "light",
                        default: {
                            value: (this.themeService.getColorTheme() == "light-mode") ? true : false,
                        },
                        options: {
                            background: {
                                color: "rgb(250, 250, 250)"
                            },
                            particles: {
                                color: {
                                    value: "#000"
                                },
                                links: {
                                    color: {
                                        value: "#000"
                                    }
                                }
                            },
                        },
                    }
                ],
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: ClickMode.repulse,
                        },
                        onHover: {
                            enable: true,
                            mode: HoverMode.connect,
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40
                        },
                        push: {
                            quantity: 1
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        connect: {
                            distance: 100,
                            links: {
                                opacity: .8,
                            },
                            radius: 100,
                        }
                    },
                },
                particles: {
                    links: {
                        distance: 125,
                        enable: true,
                        opacity: 0.5,
                        width: .1
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: MoveDirection.none,
                        enable: true,
                        outModes: {
                            default: OutMode.bounce,
                        },
                        random: false,
                        speed: { min: 0.1, max: 0.3 },
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 400,
                        },
                        value: 200,
                    },
                    opacity: {
                        value: .5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: .5, max: 1.5 },
                    },
                },
                detectRetina: true,
            },

            // 

            {
                fpsLimit: 120,
                themes: [
                    {
                        name: "dark",
                        default: {
                            value: (this.themeService.getColorTheme() == "dark-mode") ? true : false,
                        },
                        options: {
                            background: {
                                color: "rgb(40, 40,40)"
                            },
                            particles: {
                                color: {
                                    value: "#fff"
                                },
                                links: {
                                    color: {
                                        value: "#fff"
                                    }
                                }
                            },
                        },
                    },
                    {
                        name: "light",
                        default: {
                            value: (this.themeService.getColorTheme() == "light-mode") ? true : false,
                        },
                        options: {
                            background: {
                                color: "rgb(250, 250, 250)"
                            },
                            particles: {
                                color: {
                                    value: "#000"
                                },
                                links: {
                                    color: {
                                        value: "#000"
                                    }
                                }
                            },
                        },
                    }
                ],
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: ClickMode.push,
                        },
                        onHover: {
                            enable: true,
                            mode: HoverMode.repulse,
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 1,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: MoveDirection.none,
                        enable: true,
                        outModes: {
                            default: OutMode.bounce,
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }
            // Add more configurations here
        ];
    }
}
