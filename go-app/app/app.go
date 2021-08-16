package app

import (
	"go-app/database"
	"go-app/repositories/bookrepo"
	"go-app/services/bookservice"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"go-app/controllers"
	routes "go-app/routes"
)

var (
	r = gin.Default()
)

// Run is the App Entry Point
func Run() {

	/*
		====== Setup configs ============
	*/
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	r.Use(gin.Logger())

	// Set client options
	// clientOptions := options.Client().ApplyURI(config.MongoDB.URI) // use env variables
	// Connect to MongoDB
	// mongoDB, err := mongo.Connect(context.Background(), clientOptions)

	// var userCollection *mongo.Collection = database.OpenCollection(database.Client, "user")
	// var validate = validator.New()

	mongoDB := database.Client

	/*
		====== Setup repositories =======
	*/
	bookRepo := bookrepo.NewBookRepo(mongoDB)
	/*
		====== Setup services ===========
	*/
	bookService := bookservice.NewBookService(bookRepo)
	/*
		====== Setup controllers ========
	*/
	bookCtl := controllers.NewBookController(bookService)

	routes.AuthRoutes(r)
	routes.UserRoutes(r)

	/*
		======== Routes ============
	*/

	// API Home
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Welcome to your App on Docker",
		})
	})

	/*
		===== Book Routes =====
	*/
	r.POST("/books", bookCtl.PostBook)
	r.Run()
}
