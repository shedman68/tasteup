import { MapPin, Calendar, Users } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const InfoDropdown = () => {
  const infoItems = [
    {
      icon: Users,
      title: "Was?",
      content: "Afterwork Networking & Tasting Event für die Food & Beverage Startup Community",
      actionText: "Mehr Details",
      actionHref: "#details"
    },
    {
      icon: Calendar,
      title: "Wann?",
      content: "20. - 23. September 2024, täglich von 17:00 - 22:00 Uhr",
      actionText: "Zum Kalender hinzufügen",
      actionHref: "#calendar"
    },
    {
      icon: MapPin,
      title: "Wo?",
      content: "Berlin, Prenzlauer Berg - Studio Loft, Kastanienallee 77, 10435 Berlin",
      actionText: "In Google Maps anzeigen",
      actionHref: "#maps"
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoItems.map((item, index) => {
          const IconComponent = item.icon
          return (
            <Card key={index} className="bg-card border-2 border-primary/20 shadow-soft hover:shadow-retro transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-foreground leading-relaxed mb-6">{item.content}</p>
                <a 
                  href={item.actionHref}
                  className="inline-block text-accent font-medium hover:text-accent/80 transition-colors border-b border-accent hover:border-accent/80"
                >
                  {item.actionText}
                </a>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default InfoDropdown
